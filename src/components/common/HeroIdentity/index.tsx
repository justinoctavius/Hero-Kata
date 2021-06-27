import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type propsType = {
  type: string;
  name: string;
};

const HeroIdentity = ({ type, name }: propsType) => {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.type}>{type?.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: '#eee9',
    textAlign: 'center',
    fontSize: 25,
    transform: [{ rotateX: '45deg' }, { scale: 2 }]
  },
  type: {
    color: '#eee9',
    textAlign: 'center',
    fontSize: 15,
    margin: 10
  }
});

export default HeroIdentity;
