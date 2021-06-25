import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable
} from 'react-native';
import { Hero } from '../../../types';

type propsTypes = {
  hero: Hero;
  onPress: (id: number) => void;
};

const { width, height } = Dimensions.get('window');

const HeroCard = ({ hero, onPress }: propsTypes) => {
  return (
    <Pressable onPress={() => onPress(hero.id)} testID="hero-card">
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={{ uri: hero.image }} style={styles.image} />
          <Text style={styles.nickname}>{hero.nickname}</Text>
          <Text style={styles.name}>{hero.name}</Text>
        </View>
      </View>
    </Pressable>
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
