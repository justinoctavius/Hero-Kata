import React from 'react';
import { Hero } from '../../../types';
import { cleanup, render, RenderAPI } from '@testing-library/react-native';
import DetailsScreen from './index';

const heroExpected: Hero = {
  id: 1,
  name: 'Bruce Wayne',
  nickname: 'Batman',
  raze: '	Human',
  age: 55,
  description:
    'Batman was originally introduced as a ruthless vigilante who frequently killed or maimed criminals, but evolved into a character with a stringent moral code and strong sense of justice. Unlike most superheroes, Batman does not possess any superpowers, instead relying on his intellect, fighting skills, and wealth.',
  gender: 'masculine',
  image: 'https://wallpaperstock.net/wallpapers/thumbs1/33623hd.jpg',
  superpowers: [
    'Genius intellect',
    'Expert detective',
    'Skilled martial artist '
  ]
};

jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({ params: { id: '1' } }),
  useNavigation: () => ({ navigate: () => {} })
}));

describe('<DetailsScreen />', () => {
  let wrapper: RenderAPI;
  beforeEach(() => {
    wrapper = render(<DetailsScreen />);
  });

  afterEach(cleanup);

  it('Should render a hero name', async () => {
    await wrapper.findByText(heroExpected.name);
  });

  it('Should render a hero nickname', async () => {
    await wrapper.findByText(heroExpected.nickname);
  });

  it('Should render a hero gender', async () => {
    await wrapper.findByText(heroExpected.gender);
  });

  it('Should render a hero raze', async () => {
    await wrapper.findByText(heroExpected.raze);
  });

  it('Should render a hero age', async () => {
    const expected = heroExpected.age + ' years old';
    await wrapper.findByText(expected);
  });

  it('Should render a hero description', async () => {
    await wrapper.findByText(heroExpected.description);
  });

  it('Should render all the superpowers', async () => {
    const superpowers = await wrapper.findAllByTestId('superpower');
    expect(superpowers.length).toBe(heroExpected.superpowers.length);
  });
});
