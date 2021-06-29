import React, { useState } from 'react';
import { Filter } from './../../../types';
import { View, StyleSheet } from 'react-native';
import { Status, Theme, Type } from '../../../constants';
import ButtonCustom from './../ButtonCustom/';
import TextInputCommon from './../TextInputCommon/';
import { Picker } from '@react-native-picker/picker';

const filterInitialState: Filter = {
  name: '',
  status: '',
  type: ''
};

type propsType = {
  onFilter: (filter: Filter) => void;
};

const FilterHero = ({ onFilter }: propsType) => {
  const [filter, setFilter] = useState(filterInitialState);

  return (
    <>
      <View style={styles.filterContainer}>
        <TextInputCommon
          style={{ width: '50%' }}
          placeholder="Filter by name"
          value={filter.name || ''}
          setValue={(e) => setFilter({ ...filter, name: e })}
        />
        <ButtonCustom onPress={() => onFilter(filter)} text="Filter" />
      </View>
      <View style={styles.selects}>
        <Picker
          style={styles.select}
          selectedValue={filter.type}
          prompt={'Select a type'}
          onValueChange={(e) => setFilter({ ...filter, type: e })}
        >
          {Object.values(Type).map((t) => {
            return <Picker.Item key={t} label={t.toUpperCase()} value={t} />;
          })}
        </Picker>
        <Picker
          style={styles.select}
          selectedValue={filter.status}
          prompt={'Select a Status'}
          onValueChange={(e) => setFilter({ ...filter, status: e })}
        >
          {Object.values(Status).map((t) => {
            return <Picker.Item key={t} label={t.toUpperCase()} value={t} />;
          })}
        </Picker>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    backgroundColor: Theme.colors.black + '5',
    padding: Theme.spaces.s1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  select: {
    color: Theme.colors.primary,
    width: '50%'
  },
  selects: {
    flexDirection: 'row',
    backgroundColor: Theme.colors.black + '5'
  }
});

export default FilterHero;
