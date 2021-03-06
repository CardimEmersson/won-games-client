import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Email } from 'styled-icons/material-outlined';
import { renderWithTheme } from 'utils/tests/helpers';

import { TextField } from '.';

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('should render without label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('should render Icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render without placeholder', () => {
    renderWithTheme(
      <TextField
        label="Label"
        labelFor="Field"
        id="Field"
        placeholder="hey you"
      />
    );

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });

  it('should change its value when typing', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        onInput={onInput}
      />
    );

    const input = screen.getByRole('textbox');
    const text = 'this is my new text';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });

    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('should acessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    );

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('should render with icon on right side', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid="icon" />}
        iconPosition="right"
      />
    );
    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 });
  });

  it('should does not changes its value when disabled', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        onInput={onInput}
        disabled
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'this is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });

    expect(onInput).not.toHaveBeenCalled();
  });

  it('Is not acessible by tab when disabled', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    );

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(input).not.toHaveFocus();
  });

  it('render with error', () => {
    const { container } = renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        error="error message"
      />
    );

    const input = screen.getByText('error message');
    expect(input).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
