import React from 'react';
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native';

import AppBar from '../components/AppBar';
import SquareButton from '../components/SquareBotton';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}> Sign Up </Text>
        <TextInput style={styles.input}> Email Address </TextInput>
        <TextInput style={styles.input}> Password </TextInput>
        <SquareButton label="Submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Text style={styles.footterLink}>Log In.</Text>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footterLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
});
