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
import HeroIdentity from './../HeroIdentity/index';

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
        </View>
        <HeroIdentity nickname={hero.nickname} name={hero.name} />
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
  }
});

export default HeroCard;
