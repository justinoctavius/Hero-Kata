import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { useHero } from '../../hooks';
import HomeScreenPage from './page';
import Filter from './../../../types/Filter';

const HomeScreen = () => {
  const { herosState, getHeros, filterHero } = useHero();
  const navigation = useNavigation();

  useEffect(() => {
    getHeros();
  }, []);

  const onPressHeroHandler = (id: string) => {
    navigation.navigate('Details', { id });
  };

  const onPressAddHeroHandler = () => {
    navigation.navigate('AddHero');
  };

  const onPressFilterHandler = (filter: Filter) => {
    filterHero(filter);
  };
  return (
    <HomeScreenPage
      heros={herosState?.payload}
      onPressHero={onPressHeroHandler}
      onPressFilter={onPressFilterHandler}
      onPressAddHero={onPressAddHeroHandler}
    />
  );
};

export default HomeScreen;
