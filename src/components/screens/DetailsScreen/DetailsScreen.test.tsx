import React from 'react';
import { Hero } from '../../../types';
import { cleanup, render, RenderAPI } from '@testing-library/react-native';
import DetailsScreen from './index';
import { Status, Type, Timeline } from '../../../constants';

const heroExpected: Hero = {
  id: '1',
  name: 'Bruce Wayne',
  birth: '10/10/2010',
  death: '10/10/2001',
  photoUrls: [],
  status: Status.alive,
  type: Type.dc,
  timeline: Timeline.present
};

jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({ params: { id: '1' } }),
  useNavigation: () => ({ navigate: () => {} })
}));

jest.mock('./../../hooks/index', () => ({
  useHero: () => ({
    getHero: (id: string) => {},
    heroState: {
      payload: {
        id: '1',
        name: 'Bruce Wayne',
        birth: '10/10/2010',
        death: '10/10/2001',
        photoUrls: [],
        status: 'alive',
        type: 'dc',
        timeline: 'present'
      }
    }
  })
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

  it('Should render a hero birth', async () => {
    await wrapper.findByText(heroExpected.birth);
  });

  it('Should render a hero death', async () => {
    await wrapper.findByText(heroExpected.death);
  });

  it('Should render a hero status', async () => {
    await wrapper.findByText(heroExpected.status);
  });

  it('Should render a hero timeline', async () => {
    await wrapper.findByText(heroExpected.timeline || '');
  });

  it('Should render a hero type in uppercase', async () => {
    await wrapper.findByText(heroExpected.type.toUpperCase());
  });

  it('Should render a back button', () => {
    wrapper.getByText('Back');
  });
});
