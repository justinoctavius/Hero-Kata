import React from 'react';
import { cleanup, render, RenderAPI } from '@testing-library/react-native';
import HomeScreen from './index';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: () => {} })
}));

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.mock('./../../hooks/index', () => ({
  useHero: () => ({
    getHeros: () => {},
    herosState: {
      payload: [
        {
          id: '1',
          name: 'Bruce Wayne',
          birth: '10/10/2010',
          death: '10/10/2001',
          photoUrls: [],
          status: 'alive',
          type: 'dc',
          timeline: 'present'
        }
      ]
    }
  })
}));

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
  it('Should render a list of backgrounds', async () => {
    const backgrounds = await wrapper.findAllByTestId('hero-bg');
    expect(backgrounds.length).toBeGreaterThan(0);
  });
  it('Should render a Add hero button', async () => {
    await wrapper.findByTestId('addBtn');
  });
});
