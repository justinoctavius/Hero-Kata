import React from 'react';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import HeroCard from './index';
import { Hero } from '../../../types';
import { Status, Type } from '../../../constants';

const heroExpected: Hero = {
  id: '1',
  name: 'Bruce Wayne',
  type: Type.dc,
  photoUrls: ['https://wallpaperstock.net/wallpapers/thumbs1/33623hd.jpg'],
  birth: '10/10/2001',
  death: '10/10/2001',
  status: Status.alive
};

const onPressHandler = jest.fn();

describe('<HeroCard />', () => {
  let wrapper: RenderAPI;
  beforeEach(() => {
    wrapper = render(<HeroCard hero={heroExpected} onPress={onPressHandler} />);
  });

  it('Should render a hero type', () => {
    wrapper.getByText(heroExpected.type);
  });
  it('Should render a name', () => {
    wrapper.getByText(heroExpected.name);
  });
  it('Should call the method once when is pressed', () => {
    const card = wrapper.getByTestId('hero-card');
    fireEvent(card, 'press');
    expect(onPressHandler).toBeCalledTimes(1);
  });
});
