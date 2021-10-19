import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { string, func, shape } from 'prop-types';

export default function SquareButton(props) {
  const { label, onPress, style } = props;
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

SquareButton.propTypes = {
  label: string.isRequired,
  onPress: func,
  style: shape(),
};

SquareButton.defaultProps = {
  onPress: null,
  style: null,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#95C4D2',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 24,
    color: '#ffffff',
  },
});
