import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Hero } from '../../../types';

type propsTypes = {
  hero: Hero;
};

const { width, height } = Dimensions.get('window');

const HeroCard = ({ hero }: propsTypes) => {
  return (
    <View testID="hero-card" style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={{ uri: hero.image }} style={styles.image} />
        <Text style={styles.nickname}>{hero.nickname}</Text>
        <Text style={styles.name}>{hero.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: width * 0.5,
    height: height * 0.5
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16
  },
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

export default HeroCard;
