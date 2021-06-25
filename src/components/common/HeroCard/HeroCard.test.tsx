import React from 'react';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import HeroCard from './index';
import { Hero } from '../../../types';

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

const onPressHandler = jest.fn();

describe('<HeroCard />', () => {
  let wrapper: RenderAPI;
  beforeEach(() => {
    wrapper = render(<HeroCard hero={heroExpected} onPress={onPressHandler} />);
  });

  it('Should render a hero nickname', () => {
    wrapper.getByText(heroExpected.nickname);
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
