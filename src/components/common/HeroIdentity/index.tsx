import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type propsType = {
  nickname: string;
  name: string;
};

const HeroIdentity = ({ nickname, name }: propsType) => {
  return (
    <View>
      <Text style={styles.nickname}>{nickname}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nickname: {
    color: '#eee9',
    textAlign: 'center',
    fontSize: 25,
    transform: [{ rotateX: '45deg' }, { scale: 2 }]
  },
  name: {
    color: '#eee5',
    textAlign: 'center',
    fontSize: 15
  }
});

export default HeroIdentity;
