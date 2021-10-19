import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Alert,
} from 'react-native';
import { shape } from 'prop-types';

export default function HeaderLeftButton(props) {
  const { currentUser } = props;
  if (!currentUser) { return null; }
  if (currentUser.isAnonymous) {
    return null;
  }
  const firstChar = currentUser.email.slice(0, 1).toUpperCase();
  const handlePress = () => {
    Alert.alert('Your Account', currentUser.email, [
      {
        text: 'OK',
        onPress: () => {},
      },
    ]);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.label}>{firstChar}</Text>
    </TouchableOpacity>
  );
}

HeaderLeftButton.propTypes = {
  currentUser: shape().isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#467FD3',
    borderRadius: 16,
    width: 32,
    height: 32,
    marginLeft: 15,
    marginBottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
