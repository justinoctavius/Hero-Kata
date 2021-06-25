import React from 'react';
import { cleanup, render, RenderAPI } from '@testing-library/react-native';
import HomeScreen from './index';

describe('<HomeScreen />', () => {
  let wrapper: RenderAPI;
  beforeEach(() => {
    wrapper = render(<HomeScreen />);
  });

  afterEach(cleanup);

  it('Should render a list of hero', async () => {
    const heros = await wrapper.findAllByTestId('hero-card');
    expect(heros.length).toBeGreaterThan(0);
  });
});
