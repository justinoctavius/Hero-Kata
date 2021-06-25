import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

type propsType = {
  onPress: () => void;
  style?: any;
  text: string;
};

const ButtonCustom = ({ onPress, style, text }: propsType) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, { ...style }]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#2229',
    borderRadius: 5
  },
  text: {
    color: '#CCC',
    textAlign: 'center',
    fontSize: 15
  }
});

export default ButtonCustom;
