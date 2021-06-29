import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import TextCustom from '../TextCustom';
import ButtonCustom from './../ButtonCustom';
import TextInputCommon from './../TextInputCommon/index';

type propsType = {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
  setDeath: React.Dispatch<React.SetStateAction<string>>;
  setTimeline: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
  name: string;
  type: string;
  status: string;
  birth: string;
  death: string;
  timeline: string;
  title: string;
};

const HeroForm = ({
  setName,
  name,
  setType,
  type,
  status,
  setStatus,
  birth,
  setBirth,
  death,
  setDeath,
  timeline,
  setTimeline,
  onSubmit,
  title
}: propsType) => {
  return (
    <View style={styles.container}>
      <TextCustom>{title}</TextCustom>
      <View style={styles.form}>
        <TextInputCommon
          placeholder="Name"
          setValue={(e) => setName(e)}
          value={name}
        />
        <TextInputCommon
          placeholder="Type"
          setValue={(e) => setType(e)}
          value={type}
        />
        <TextInputCommon
          placeholder="Status"
          setValue={(e) => setStatus(e)}
          value={status}
        />
        <TextInputCommon
          placeholder="Birth"
          setValue={(e) => setBirth(e)}
          value={birth}
        />
        <TextInputCommon
          placeholder="Death"
          setValue={(e) => setDeath(e)}
          value={death}
        />
        <TextInputCommon
          placeholder="Timeline"
          setValue={(e) => setTimeline(e)}
          value={timeline}
        />
        <ButtonCustom text="Send" onPress={onSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#000',
    padding: 10
  },
  form: {
    height: '100%',
    justifyContent: 'space-evenly'
  }
});

export default HeroForm;
