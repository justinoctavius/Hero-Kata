import React from 'react';
import { useRef } from 'react';
import { View, StatusBar, Animated } from 'react-native';
import { Hero } from '../../../types';
import { HeroList, HeroListBackground } from './../../common/';

type propsTypes = {
  heros: Hero[];
  onPressHero: (id: string) => void;
};

const HomeScreenPage = ({ heros, onPressHero }: propsTypes) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <StatusBar hidden />
      <HeroListBackground heros={heros} scrollX={scrollX} />
      <HeroList scrollX={scrollX} heros={heros} onPressHero={onPressHero} />
    </View>
  );
};

export default HomeScreenPage;
