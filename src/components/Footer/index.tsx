import Link from 'next/link';
import { Logo } from 'components/Logo';
import { Heading } from 'components/Heading';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Wrapper>
      <Logo color="black" />

      <S.Content>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact
          </Heading>

          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Follow us
          </Heading>

          <nav aria-labelledby="social-media">
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Links
          </Heading>

          <nav aria-labelledby="footer resources">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/games">
              <a>Store</a>
            </Link>
            <Link href="/games">
              <a>Buscar</a>
            </Link>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Location
          </Heading>

          <span>Lorem ipsum dolor sit amet</span>
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor dolor sit</span>
        </S.Column>
      </S.Content>
      <S.Copyright>Won Games 2020 &copy; All rights reserved.</S.Copyright>
    </S.Wrapper>
  );
};

export { Footer };
