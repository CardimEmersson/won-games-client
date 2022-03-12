import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { GameInfo } from '.';

const props = {
  title: 'MyGameTitle',
  description: 'MyGameDescription',
  price: '210,00'
};

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', { name: /MyGameTitle/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/\$210,00/i)).toBeInTheDocument();

    expect(screen.getByText(/MyGameDescription/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument();
  });
});
