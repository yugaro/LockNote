import React, { useCallback } from 'react';
import {
  View, StyleSheet, TextInput,
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyBoardSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const handlePress = useCallback(() => {
    const db = firebase.firestore();
    const ref = db.collection('memos');
    ref.add({
      bodyText: 'Hello',
    })
      .then((docRef) => {
        console.log('Created !', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('Error!', error);
      });
  });

  return (
    <KeyboardSafeView style={styles.containter}>
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        onPress={handlePress}
      />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
