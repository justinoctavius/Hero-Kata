import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView
} from 'react-native';
import { Hero } from '../../../types';

type propsType = {
  hero: Hero;
  onBackPress: () => void;
};

const DetailsScreenPage = ({ hero, onBackPress }: propsType) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onBackPress()} style={styles.back}>
        <Text style={[styles.text, { textAlign: 'left' }]}>Back</Text>
      </Pressable>
      <View style={{ height: '50%' }}>
        <Image
          source={{ uri: hero?.image }}
          style={[StyleSheet.absoluteFillObject, { zIndex: -9 }]}
        />
        <LinearGradient
          colors={['#FFF0', '#000']}
          style={{ flex: 0.5, top: '50%' }}
        />
      </View>
      <View style={{ height: '50%' }}>
        <View>
          <Text style={[styles.text, styles.nickname]}>{hero?.nickname}</Text>
          <Text style={[styles.text, { color: '#eee5' }]}>{hero?.name}</Text>
        </View>
        <View style={styles.info}>
          <Text style={[styles.text]}>{hero?.age + ' years old'}</Text>
          <Text style={[styles.text]}>{hero?.gender}</Text>
          <Text style={[styles.text]}>{hero?.raze}</Text>
        </View>
        <Text style={styles.text}>{hero?.description}</Text>
        <Text style={[styles.text, { fontSize: 25 }]}>Superpowers</Text>
        <ScrollView>
          {hero?.superpowers.map((superpower, index) => (
            <Text key={index} style={styles.text} testID="superpower">
              {superpower}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    position: 'relative'
  },
  text: {
    color: '#CCC',
    textAlign: 'center',
    fontSize: 15
  },
  back: {
    padding: 10,
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#2229',
    borderRadius: 5
  },
  nickname: {
    color: '#EEE',
    fontSize: 25,
    transform: [{ rotateX: '45deg' }, { scale: 2 }]
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

export default DetailsScreenPage;
