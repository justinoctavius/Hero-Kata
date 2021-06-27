import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { useHero } from '../../hooks';
import HomeScreenPage from './page';

const HomeScreen = () => {
  const { herosState, getHeros } = useHero();
  const navigation = useNavigation();

  useEffect(() => {
    getHeros();
  }, []);

  const onPressHeroHandler = (id: string) => {
    navigation.navigate('Details', { id });
  };

  return (
    <HomeScreenPage
      heros={herosState?.payload}
      onPressHero={onPressHeroHandler}
    />
  );
};

export default HomeScreen;
