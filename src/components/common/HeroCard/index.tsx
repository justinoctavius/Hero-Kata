import React from 'react';
import { View, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { Hero } from '../../../types';
import HeroIdentity from './../HeroIdentity/';

type propsTypes = {
  hero: Hero;
  onPress: (id: string) => void;
};

const { width, height } = Dimensions.get('window');

const HeroCard = ({ hero, onPress }: propsTypes) => {
  return (
    <View style={styles.cardContainer} testID="hero-card">
      <Pressable onPress={() => onPress(hero.id)} testID="hero-btn">
        <View style={styles.card}>
          <Image source={{ uri: hero.photoUrls[0] }} style={styles.image} />
        </View>
      </Pressable>
      <HeroIdentity type={hero.type} name={hero.name} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    top: '25%',
    width,
    height,
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
