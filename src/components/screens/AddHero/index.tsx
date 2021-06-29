import React, { useState } from 'react';
import { View, Text } from 'react-native';
import HeroForm from './../../common/HeroForm/index';
import useHero from './../../hooks/useHero';

const AddHero = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [birth, setBirth] = useState('');
  const [death, setDeath] = useState('');
  const [timeline, setTimeline] = useState('');

  const { addHero } = useHero();

  const onSubmitHandler = async () => {
    await addHero({
      id: '',
      photoUrls: [],
      name,
      type,
      status,
      birth,
      death,
      timeline
    });
  };

  return (
    <HeroForm
      title="Add hero"
      setName={setName}
      name={name}
      setType={setType}
      type={type}
      status={status}
      setStatus={setStatus}
      birth={birth}
      setBirth={setBirth}
      death={death}
      setDeath={setDeath}
      timeline={timeline}
      setTimeline={setTimeline}
      onSubmit={onSubmitHandler}
    />
  );
};

export default AddHero;
