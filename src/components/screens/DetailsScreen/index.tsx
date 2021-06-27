import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useHero } from '../../hooks';
import DetailsScreenPage from './page';

const DetailsScreen = () => {
  const { heroState, getHero } = useHero();
  const navigation = useNavigation();
  const route: any = useRoute();

  const onBackPressHandler = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    getHero(route.params?.id);
  }, []);

  return (
    <DetailsScreenPage
      hero={heroState?.payload}
      onBackPress={onBackPressHandler}
    />
  );
};

export default DetailsScreen;
