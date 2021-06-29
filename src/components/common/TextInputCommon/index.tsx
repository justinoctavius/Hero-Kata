import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Theme } from '../../../constants';

type propsType = {
  value: string;
  setValue: (e: string) => void;
  placeholder: string;
  style?: any;
};

const TextInputCommon = ({
  value,
  setValue,
  placeholder,
  style
}: propsType) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.input, style]}
      placeholderTextColor={Theme.colors.primary}
      value={value}
      onChangeText={(e) => setValue(e)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: Theme.colors.primary,
    borderBottomWidth: 1,
    color: Theme.colors.primary,
    padding: 0
  }
});

export default TextInputCommon;
