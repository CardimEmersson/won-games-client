import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import 'match-media-mock';

import { Home } from '.';

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcommingHighlight: highlightMock,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock
};

jest.mock('components/Showcase', () => {
  return {
    _esModule: true,
    Showcase: function Mock() {
      return <div data-testid="Mock Showcase"></div>;
    }
  };
});

jest.mock('components/BannerSlider', () => {
  return {
    _esModule: true,
    BannerSlider: function Mock() {
      return <div data-testid="Mock BannerSlider"></div>;
    }
  };
});

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5);
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument();
  });
});
