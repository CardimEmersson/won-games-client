import { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type CheckboxProps = {
  isChecked?: boolean;
  onCheck?: (status: boolean) => void;
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  value?: string | readonly string[] | number;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  isChecked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck,
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked;
    setChecked(status);

    if (onCheck) {
      onCheck(status);
    }
  };

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
};

export { Checkbox };
