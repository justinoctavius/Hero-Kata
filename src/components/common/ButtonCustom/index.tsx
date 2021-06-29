import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { Theme } from '../../../constants';

type propsType = {
  onPress: () => void;
  style?: any;
  text: string;
  testID?: string;
};

const ButtonCustom = ({ onPress, style, text, testID }: propsType) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { ...style }]}
      testID={testID}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Theme.spaces.s1,
    backgroundColor: Theme.colors.black + '5',
    borderRadius: Theme.spaces.s1 / 2
  },
  text: {
    color: Theme.colors.primary,
    textAlign: 'center',
    fontSize: Theme.fonts.normal
  }
});

export default ButtonCustom;
