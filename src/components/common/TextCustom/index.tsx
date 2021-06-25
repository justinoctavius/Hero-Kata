import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    color: '#CCC',
    textAlign: 'center',
    fontSize: 15
  }
});

export default TextCustom;
