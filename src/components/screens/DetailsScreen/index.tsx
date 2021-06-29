import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useHero } from '../../hooks';
import DetailsScreenPage from './page';

const DetailsScreen = () => {
  const { heroState, getHero, deleteHero } = useHero();
  const navigation = useNavigation();
  const route: any = useRoute();

  const onBackPressHandler = () => {
    navigation.navigate('Home');
  };

  const onEditPressHandler = (id: string) => {
    navigation.navigate('EditHero', { id });
  };

  const onDeletePressHandler = async (id: string) => {
    await deleteHero(id);
  };

  useEffect(() => {
    getHero(route.params?.id);
  }, []);

  return (
    <DetailsScreenPage
      hero={heroState?.payload}
      onBackPress={onBackPressHandler}
      onEditPress={onEditPressHandler}
      onDeletePress={onDeletePressHandler}
    />
  );
};

export default DetailsScreen;
