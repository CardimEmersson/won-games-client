import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import 'match-media-mock';

import { GameCardSlider } from '.';

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/300x150',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/310x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/320x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/300x160',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/330x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/340x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
];

describe('<GameCardSlider />', () => {
  it('should render with 4 actives items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />);

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    });
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    });
  });
});
