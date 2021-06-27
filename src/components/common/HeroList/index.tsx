import React from 'react';
import { Animated } from 'react-native';
import { Hero } from '../../../types';
import HeroCard from '../HeroCard';

type propsType = {
  heros: Hero[];
  scrollX: Animated.Value;
  onPressHero: (id: string) => void;
};

const HeroList = ({ heros, scrollX, onPressHero }: propsType) => {
  return (
    <Animated.FlatList
      keyExtractor={(item) => item.id.toString()}
      data={heros}
      horizontal
      pagingEnabled
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      renderItem={({ item }) => <HeroCard hero={item} onPress={onPressHero} />}
    />
  );
};

export default HeroList;
