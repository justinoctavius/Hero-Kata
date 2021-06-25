import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import HomeScreen from './index';

describe('<HomeScreen />', () => {
  let wrapper: RenderAPI;
  beforeEach(() => {
    wrapper = render(<HomeScreen />);
  });

  it('Should return a home title', () => {
    const title = wrapper.getByText('Home');
    expect(title).toBeDefined();
  });
});
