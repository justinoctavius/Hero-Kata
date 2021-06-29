import React, { useRef } from 'react';
import { View, StatusBar, Animated, Dimensions } from 'react-native';
import { Theme } from '../../../constants';
import { Hero, Filter } from '../../../types';
import {
  HeroList,
  HeroListBackground,
  FilterHero,
  ButtonCustom
} from './../../common/';

type propsTypes = {
  heros: Hero[];
  onPressHero: (id: string) => void;
  onPressFilter: (filter: Filter) => void;
  onPressAddHero: () => void;
};

const { height, width } = Dimensions.get('window');

const HomeScreenPage = ({
  heros,
  onPressHero,
  onPressFilter,
  onPressAddHero
}: propsTypes) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <StatusBar hidden />
      <FilterHero onFilter={onPressFilter} />
      <HeroListBackground heros={heros} scrollX={scrollX} />
      <HeroList scrollX={scrollX} heros={heros} onPressHero={onPressHero} />
      <ButtonCustom
        text="Add hero"
        onPress={onPressAddHero}
        testID="addBtn"
        style={{
          position: 'absolute',
          zIndex: Theme.zIndex.z1,
          top: height - 50,
          left: width / 2 - 50
        }}
      />
    </View>
  );
};

export default HomeScreenPage;
