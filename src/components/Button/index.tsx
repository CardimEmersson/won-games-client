import {
  ReactNode,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  forwardRef,
  ForwardRefRenderFunction
} from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: ReactNode;
  as?: ElementType;
} & ButtonTypes;

const ForwardButton: ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    icon,
    ...props
  },
  ref
) => {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      ref={ref}
      {...props}
      minimal={minimal}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};

const Button = forwardRef(ForwardButton);

export { Button };
