import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useHero } from '../../hooks';
import DetailsScreenPage from './page';

const DetailsScreen = () => {
  const { heroResponse, getHero } = useHero();
  const navigation = useNavigation();
  const route: any = useRoute();

  const onBackPressHandler = () => {
    navigation.navigate('Home');
  };

  const getHeroHandler = async () => {
    await getHero(route.params?.id);
  };

  useEffect(() => {
    getHeroHandler();
  }, []);

  return (
    <DetailsScreenPage
      hero={heroResponse?.payload}
      onBackPress={onBackPressHandler}
    />
  );
};

export default DetailsScreen;
