import React from 'react';
import { useRef } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Animated
} from 'react-native';
import { Hero } from '../../../types';
import { HeroList, HeroListBackground } from './../../common/';

type propsTypes = {
  heros: Hero[];
};

const HomeScreenPage = ({ heros }: propsTypes) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <StatusBar hidden />
      <HeroListBackground heros={heros} scrollX={scrollX} />
      <HeroList scrollX={scrollX} heros={heros} />
    </View>
  );
};

export default HomeScreenPage;
