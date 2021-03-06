import Image from 'next/image';
import { Button } from 'components/Button';
import { Ribbon, RibbonColors, RibbonSizes } from 'components/Ribbon';
import { ReactNode } from 'react';
import * as S from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor,
  ribbonSize
}: BannerProps) => {
  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <S.ImageWrapper>
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
      </S.ImageWrapper>

      <S.Caption>
        <S.Title>{title}</S.Title>

        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Wrapper>
  );
};

export { Banner };
