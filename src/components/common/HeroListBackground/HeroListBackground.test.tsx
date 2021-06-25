import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { Animated } from 'react-native';
import herosModel from '../../../models/heros.model';
import HeroListBackground from './index';

describe('<HeroList />', () => {
  let wrapper: RenderAPI;
  beforeEach(() => {
    wrapper = render(
      <HeroListBackground scrollX={new Animated.Value(0)} heros={herosModel} />
    );
  });

  it('Should render a list of background', async () => {
    const hero = await wrapper.findAllByTestId('hero-bg');
    expect(hero.length).toBeGreaterThan(0);
  });
});
