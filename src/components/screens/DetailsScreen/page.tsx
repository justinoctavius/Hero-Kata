import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Image, StyleSheet } from 'react-native';
import { Hero } from '../../../types';
import { ButtonCustom, HeroIdentity, TextCustom } from '../../common/';

type propsType = {
  hero: Hero;
  onBackPress: () => void;
  onEditPress: (id: string) => void;
  onDeletePress: (id: string) => void;
};

const DetailsScreenPage = ({
  hero,
  onBackPress,
  onEditPress,
  onDeletePress
}: propsType) => {
  return (
    <View style={styles.container}>
      <ButtonCustom text="Back" onPress={onBackPress} style={styles.back} />
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: hero?.photoUrls[0] }}
          style={[StyleSheet.absoluteFillObject, { zIndex: -9 }]}
        />
        <LinearGradient
          colors={['#FFF0', '#000']}
          style={{ flex: 0.5, top: '50%' }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around'
        }}
      >
        <HeroIdentity type={hero?.type} name={hero?.name} />
        <View style={styles.info}>
          <View>
            <TextCustom style={{ fontSize: 20 }}>Birthday</TextCustom>
            <TextCustom>{hero?.birth}</TextCustom>
          </View>
          <View>
            <TextCustom style={{ fontSize: 20 }}>Deathday</TextCustom>
            <TextCustom>{hero?.death}</TextCustom>
          </View>
          <View>
            <TextCustom style={{ fontSize: 20 }}>Status</TextCustom>
            <TextCustom>{hero?.status}</TextCustom>
          </View>
          {hero?.timeline && (
            <View>
              <TextCustom style={{ fontSize: 20 }}>Timeline</TextCustom>
              <TextCustom>{hero?.timeline}</TextCustom>
            </View>
          )}
        </View>
        <View style={[styles.info]}>
          <ButtonCustom text="Edit" onPress={() => onEditPress(hero?.id)} />
          <ButtonCustom text="Delete" onPress={() => onDeletePress(hero?.id)} />
        </View>
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
