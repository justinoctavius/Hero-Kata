import React from 'react';
import { Animated } from 'react-native';
import { Hero } from '../../../types';
import HeroListPage from './page';

type propsTypes = {
  scrollX: Animated.Value;
  heros: Hero[];
};

const HeroList = ({ scrollX, heros }: propsTypes) => {
  return <HeroListPage heros={heros} scrollX={scrollX} />;
};

export default HeroList;
