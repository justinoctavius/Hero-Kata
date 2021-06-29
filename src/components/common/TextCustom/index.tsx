import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Theme } from '../../../constants';

type propsTypes = {
  children: JSX.Element | string;
  style?: any;
  testID?: string;
};

const TextCustom = ({ children, style, testID }: propsTypes) => {
  return (
    <Text style={[styles.text, { ...style }]} testID={testID}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Theme.colors.primary + '9',
    textAlign: 'center',
    fontSize: Theme.fonts.normal
  }
});

export default TextCustom;
