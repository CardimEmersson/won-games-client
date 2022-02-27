import { Menu } from 'components/Menu';
import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps, Highlight } from 'components/Highlight';
import { BannerSlider } from 'components/BannerSlider';
import { GameCardSlider } from 'components/GameCardSlider';

import * as S from './styles';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  upcommingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

const Home = ({
  banners,
  newGames,
  mostPopularGames,
  mostPopularHighlight,
  upcommingGames,
  upcommingHighlight,
  freeHighlight,
  upcommingMoreGames,
  freeGames
}: HomeTemplateProps) => {
  return (
    <section>
      <Container>
        <Menu />
        <BannerSlider items={banners} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
        <GameCardSlider items={newGames} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} color="white" />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
        <GameCardSlider items={upcommingGames} />
        <Highlight {...upcommingHighlight} />
        <GameCardSlider items={upcommingMoreGames} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} color="white" />
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  );
};

export { Home };
