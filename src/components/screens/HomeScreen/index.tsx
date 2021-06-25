import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { useHero } from '../../hooks';
import HomeScreenPage from './page';

const HomeScreen = () => {
  const { herosResponse, getHeros } = useHero();
  const navigation = useNavigation();

  useEffect(() => {
    getHeros();
  }, []);

  const onPressHeroHandler = (id: number) => {
    navigation.navigate('Details', { id });
  };

  return (
    <HomeScreenPage
      heros={herosResponse?.payload}
      onPressHero={onPressHeroHandler}
    />
  );
};

export default HomeScreen;
