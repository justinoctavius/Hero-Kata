import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../../../constants';

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
    color: Theme.colors.primary + '9',
    textAlign: 'center',
    fontSize: Theme.fonts.title,
    transform: [{ rotateX: '45deg' }, { scale: 2 }]
  },
  type: {
    color: Theme.colors.primary + '9',
    textAlign: 'center',
    fontSize: Theme.fonts.normal,
    margin: Theme.spaces.s1
  }
});

export default HeroIdentity;
