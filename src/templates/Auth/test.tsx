import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { Auth } from '.';

describe('<Auth />', () => {
  it('should render logos, title, children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    );

    //verificar se tem 2 logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);
    //verificar se tem heading
    expect(
      screen.getByRole('heading', { name: /all your favorite games/i })
    ).toBeInTheDocument();
    //verificar se tem subtitle
    expect(
      screen.getByRole('heading', { name: /complete gaming platform/i })
    ).toBeInTheDocument();
    //verificar se tem title
    expect(
      screen.getByRole('heading', { name: /Auth Title/i })
    ).toBeInTheDocument();
    //verificar se tem children
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    //verificar se tem footer
    expect(
      screen.getByText(/Todos os Direitos Reservados/i)
    ).toBeInTheDocument();
  });
});
