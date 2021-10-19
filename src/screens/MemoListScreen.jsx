import React, { useState, useEffect } from 'react';
import {
  Text, View, StyleSheet, Alert,
} from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import SquareButton from '../components/SquareBotton';
import Loading from '../components/Loading';
import HeaderRightButton from '../components/HeaderRightButton';
import HeaderLeftButton from '../components/HeaderLeftButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const cleanupFuncs = {
      auth: () => {},
      memos: () => {},
    };
    cleanupFuncs.auth = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const db = firebase.firestore();
        const ref = db.collection(`users/${user.uid}/memos`).orderBy('updatedAt', 'desc');
        cleanupFuncs.memos = ref.onSnapshot((snapshot) => {
          const userMemos = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            userMemos.push({
              id: doc.id,
              bodyText: data.bodyText,
              updatedAt: data.updatedAt.toDate(),
            });
          });
          setMemos(userMemos);
          setLoading(false);
        }, () => {
          setLoading(false);
        });
        navigation.setOptions({
          headerRight: () => (
            <HeaderRightButton currentUser={user} cleanupFuncs={cleanupFuncs} />
          ),
          headerLeft: () => (
            <HeaderLeftButton currentUser={user} />
          ),
        });
      } else {
        firebase.auth().signInAnonymously()
          .catch(() => {
            Alert.alert('Error', 'Restart your application.');
          })
          .then(() => { setLoading(false); });
      }
    });
    return () => {
      cleanupFuncs.auth();
      cleanupFuncs.memos();
    };
  }, []);

  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading} />
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>Let&apos;s create your first memo !</Text>
          <SquareButton
            style={emptyStyles.button}
            label="create"
            onPress={() => { navigation.navigate('MemoCreate'); }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'center',
  },
});
