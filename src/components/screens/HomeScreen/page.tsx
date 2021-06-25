import React from 'react';
import { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  Animated
} from 'react-native';
import { Hero } from '../../../types';

type propsTypes = {
  heros: Hero[];
};

const { height, width } = Dimensions.get('window');

const HomeScreenPage = ({ heros }: propsTypes) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {heros &&
        heros.map((hero, index) => {
          const inputRange = [
            width * (index - 1),
            width * index,
            width * (index + 2)
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0]
          });
          return (
            <View style={StyleSheet.absoluteFillObject}>
              <Animated.Image
                source={{ uri: hero.image }}
                style={[StyleSheet.absoluteFillObject, { opacity }]}
                blurRadius={20}
              />
            </View>
          );
        })}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height
  },
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

export default HomeScreenPage;
