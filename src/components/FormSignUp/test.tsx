import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { FormSignUp } from '.';

describe('<FormSignUp />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<FormSignUp />);

    // verificar text field email
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    // verificar text field password
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument();
    // verificar botão
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the text and link sign ip', () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByText(/already have an account?/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Sign in/i })).toBeInTheDocument();
  });
});
