import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Hero } from '../../../types';
import { ButtonCustom, HeroIdentity, TextCustom } from '../../common/';

type propsType = {
  hero: Hero;
  onBackPress: () => void;
};

const DetailsScreenPage = ({ hero, onBackPress }: propsType) => {
  return (
    <View style={styles.container}>
      <ButtonCustom text="Back" onPress={onBackPress} style={styles.back} />
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: hero?.image }}
          style={[StyleSheet.absoluteFillObject, { zIndex: -9 }]}
        />
        <LinearGradient
          colors={['#FFF0', '#000']}
          style={{ flex: 0.5, top: '50%' }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <HeroIdentity nickname={hero?.nickname} name={hero?.name} />
        <View style={styles.info}>
          <TextCustom>{hero?.age + ' years old'}</TextCustom>
          <TextCustom>{hero?.gender}</TextCustom>
          <TextCustom>{hero?.raze}</TextCustom>
        </View>
        <TextCustom>{hero?.description}</TextCustom>
        <TextCustom style={{ fontSize: 25 }}>Superpowers</TextCustom>
        <ScrollView>
          {hero?.superpowers.map((superpower, index) => (
            <TextCustom key={index} testID="superpower">
              {superpower}
            </TextCustom>
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
  back: {
    position: 'absolute',
    top: 10,
    left: 10
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

export default DetailsScreenPage;
