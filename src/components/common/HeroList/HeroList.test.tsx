import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import HeroList from './index';
import { Animated } from 'react-native';
import herosModel from '../../../models/heros.model';

describe('<HeroList />', () => {
  let wrapper: RenderAPI;
  beforeEach(() => {
    wrapper = render(
      <HeroList scrollX={new Animated.Value(0)} heros={herosModel} />
    );
  });

  it('Should render a list of hero', async () => {
    const hero = await wrapper.findAllByTestId('hero-card');
    expect(hero.length).toBeGreaterThan(0);
  });
});
