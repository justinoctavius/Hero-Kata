import React from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
  StyleSheet
} from 'react-native';
import { Hero } from '../../../types';

type propsType = {
  heros: Hero[];
  scrollX: Animated.Value;
};

const { height, width } = Dimensions.get('window');

const HeroListPage = ({ heros, scrollX }: propsType) => {
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
      renderItem={({ item }) => (
        <View testID="hero-card" style={styles.cardContainer}>
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.nickname}>{item.nickname}</Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: width * 0.5,
    height: height * 0.5
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16
  },
  nickname: {
    color: '#eee9',
    textAlign: 'center',
    fontSize: 25,
    transform: [{ rotateX: '45deg' }, { scale: 2 }]
  }
});

export default HeroListPage;
