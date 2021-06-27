import React from 'react';
import { View, Dimensions, Animated, StyleSheet } from 'react-native';
import { Hero } from '../../../types';

type propsTypes = {
  heros: Hero[];
  scrollX: Animated.Value;
};

const { width } = Dimensions.get('window');

const HeroListBackground = ({ heros, scrollX }: propsTypes) => {
  return (
    <>
      {heros?.map((hero, index) => {
        const inputRange = [
          width * (index - 1),
          width * index,
          width * (index + 2)
        ];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0]
        });
        return (
          <View
            style={StyleSheet.absoluteFillObject}
            key={index}
            testID="hero-bg"
          >
            <Animated.Image
              source={{ uri: hero.photoUrls[0] }}
              style={[StyleSheet.absoluteFillObject, { opacity }]}
              blurRadius={40}
            />
          </View>
        );
      })}
    </>
  );
};

export default HeroListBackground;
