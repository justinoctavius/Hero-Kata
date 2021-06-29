import React, { useEffect, useState } from 'react';
import useHero from './../../hooks/useHero';
import { useRoute } from '@react-navigation/native';
import { HeroForm } from '../../common';

const EditHero = () => {
  const {
    heroState: { payload },
    getHero,
    updateHero
  } = useHero();
  const [name, setName] = useState(payload?.name || '');
  const [type, setType] = useState(payload?.type || '');
  const [status, setStatus] = useState(payload?.status || '');
  const [birth, setBirth] = useState(payload?.birth || '');
  const [death, setDeath] = useState(payload?.death || '');
  const [timeline, setTimeline] = useState(payload?.timeline || '');

  const route: any = useRoute();

  useEffect(() => {
    getHero(route.params?.id);
  }, []);

  const onSubmitHandler = async () => {
    await updateHero(route.params?.id, {
      id: route.params?.id,
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
      title="Edit hero"
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

export default EditHero;
