import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { FormSignIn } from '.';

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />);

    // verificar text field email
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    // verificar text field password
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    // verificar botão
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByText(/Forgot your password/i)).toBeInTheDocument();
  });

  it('should render the text and link sign up', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByText(/have an account?/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument();
  });
});
