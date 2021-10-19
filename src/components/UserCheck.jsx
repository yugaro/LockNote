import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import { shape } from 'prop-types';

export default function UserCheck(props) {
  const { currentUser } = props;
  if (!currentUser) { return null; }
  if (currentUser.isAnonymous) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {currentUser.email}
      </Text>
    </View>
  );
}

UserCheck.propTypes = {
  currentUser: shape().isRequired,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'red',
    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 100,
  },
  label: {
    fontSize: 14,
    color: '#000000',
  },
});
