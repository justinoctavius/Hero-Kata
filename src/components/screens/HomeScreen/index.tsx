import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { QueryResponse } from '../../../types';
import { useHero } from '../../hooks';
import HomeScreenPage from './page';

const HomeScreen = () => {
  const [data, setData] = useState<QueryResponse>();
  const { getHeros } = useHero();

  useEffect(() => {
    getHeros().then((res) => setData(res));
  }, []);

  return <HomeScreenPage heros={data?.payload} />;
};

export default HomeScreen;
