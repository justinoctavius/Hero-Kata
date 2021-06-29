import React from 'react';
import { RenderAPI, render } from '@testing-library/react-native';
import HeroForm from './index';

const setName = jest.fn();
const setType = jest.fn();
const setStatus = jest.fn();
const setBirth = jest.fn();
const setDeath = jest.fn();
const setTimeline = jest.fn();
const onSubmitHandler = jest.fn();

describe('<HeroForm />', () => {
  let wrapper: RenderAPI;
  beforeEach(() => {
    wrapper = render(
      <HeroForm
        title={'test'}
        setName={setName}
        name={''}
        setType={setType}
        type={''}
        status={''}
        setStatus={setStatus}
        birth={''}
        setBirth={setBirth}
        death={''}
        setDeath={setDeath}
        timeline={''}
        setTimeline={setTimeline}
        onSubmit={onSubmitHandler}
      />
    );
  });

  it('Should render a Name input', () => {
    wrapper.getByPlaceholderText('Name');
  });
  it('Should render a Type input', () => {
    wrapper.getByPlaceholderText('Type');
  });
  it('Should render a Status input', () => {
    wrapper.getByPlaceholderText('Status');
  });
  it('Should render a Birth input', () => {
    wrapper.getByPlaceholderText('Birth');
  });
  it('Should render a Death input', () => {
    wrapper.getByPlaceholderText('Death');
  });
  it('Should render a Timeline input', () => {
    wrapper.getByPlaceholderText('Timeline');
  });
  it('Should render a Send button', () => {
    wrapper.getByText('Send');
  });
  it('Should render a title', () => {
    wrapper.getByText('test');
  });
});
