import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Banner } from '.';

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Banner
        title="Defy death"
        img="https://source.unsplash.com/user/williamjusten/1042x580"
        subtitle="
          <p>
            Play the new <strong>CrashLands</strong> season
          </p>
        "
        buttonLabel="Buy now"
        buttonLink="/games/defy-death"
      />
    );

    // verifique se o title existe
    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument();
    // verifique se o subtitle existe
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument();
    // verifique se a imagem existe
    expect(
      screen.getByRole('img', { name: /Defy death/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a Ribbon', () => {
    const { debug, container } = renderWithTheme(
      <Banner
        title="Defy death"
        img="https://source.unsplash.com/user/williamjusten/1042x580"
        subtitle="
          <p>
            Play the new <strong>CrashLands</strong> season
          </p>
        "
        buttonLabel="Buy now"
        buttonLink="/games/defy-death"
        ribbon="My ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );

    debug(container);

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
  });
});
