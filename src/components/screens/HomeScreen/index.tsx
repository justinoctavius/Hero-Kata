import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { QueryResponse } from '../../../types';
import { useHero } from '../../hooks';
import HomeScreenPage from './page';

const HomeScreen = () => {
  const [data, setData] = useState<QueryResponse>();
  const { getHeros } = useHero();
  const navigation = useNavigation();

  useEffect(() => {
    getHeros().then((res) => setData(res));
  }, []);

  const onPressHeroHandler = (id: number) => {
    navigation.navigate('Details', { id });
  };

  return (
    <HomeScreenPage heros={data?.payload} onPressHero={onPressHeroHandler} />
  );
};

export default HomeScreen;
