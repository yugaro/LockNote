import React from 'react';
import {
  View, StyleSheet, TextInput,
} from 'react-native';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyBoardSafeView';

export default function MemoEditScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardSafeView style={styles.containter}>
      <View style={styles.inputContainer}>
        <TextInput value="Shopping List" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        onPress={() => { navigation.goBack(); }}
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
