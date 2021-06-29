import React from 'react';
import { Animated, View, Text, Dimensions } from 'react-native';
import { Theme } from '../../../constants';
import { Hero } from '../../../types';
import HeroCard from '../HeroCard';

type propsType = {
  heros: Hero[];
  scrollX: Animated.Value;
  onPressHero: (id: string) => void;
};

const { width, height } = Dimensions.get('window');

const HeroList = ({ heros, scrollX, onPressHero }: propsType) => {
  return (
    <Animated.FlatList
      keyExtractor={(item) => item.id.toString()}
      data={heros}
      horizontal
      pagingEnabled
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      renderItem={({ item }) => <HeroCard hero={item} onPress={onPressHero} />}
      ListEmptyComponent={() => (
        <View
          style={{
            backgroundColor: Theme.colors.black,
            width,
            height,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ color: Theme.colors.primary }}>
            There are not heros
          </Text>
        </View>
      )}
    />
  );
};

export default HeroList;
