import { screen, fireEvent } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from '../../utils/tests/helpers';
import { GameCard } from '.';

const props = {
  title: 'Population Zero',
  developer: 'Rockstart Games',
  img: 'https://source.unsplash.com/random/300x140',
  price: 'R$ 235,00'
};

describe('<GameCard />', () => {
  it('should render correctly', () => {
    //renderizar o GameCard
    renderWithTheme(<GameCard {...props} />);

    // verificar se o title foi renderizado
    expect(
      screen.getByRole('heading', { name: /Population Zero/i })
    ).toBeInTheDocument();
    // verificar se o developer foi renderizado
    expect(
      screen.getByRole('heading', { name: /Rockstart Games/i })
    ).toBeInTheDocument();
    // verificar se a img foi renderizado
    expect(
      screen.getByRole('img', { name: /Population Zero/i })
    ).toBeInTheDocument();
    // verificar se a fav button foi renderizado
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render price in label', () => {
    // renderiza o componente
    renderWithTheme(<GameCard {...props} />);

    const price = screen.getByText('R$ 235,00');
    // preço não tenha line-through
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' });

    // preço tenha o background secundário
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
  });

  it('should render a line-through in price when promotional', () => {
    // renderiza o componente (COM promotionalPrice) // 200 reais // 15 reais
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />);
    // preço tenha line-through (235)
    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    });
    // preço novo promocional não vai ter line-through (15)
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    });
  });

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove to wishlist/i)).toBeInTheDocument();
  });

  it('should call onFav method favorite is clicked', () => {
    const onFav = jest.fn();
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFav).toBeCalled();
  });

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    );

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
    expect(ribbon).toBeInTheDocument;
  });
});
