import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen, EditHero, HomeScreen } from '../screens';
import AddHero from './../screens/AddHero/index';

const Stack = createStackNavigator();

const NavigatorApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="EditHero" component={EditHero} />
        <Stack.Screen name="AddHero" component={AddHero} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorApp;
