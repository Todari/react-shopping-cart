import * as S from './Checkbox.style';
<<<<<<< HEAD
import CHECK_TRUE from '../../../assets/check-true.svg?react';
import CHECK_FALSE from '../../../assets/check-false.svg?react';
=======

import CHECK_TRUE from '../../../assets/check-true.svg';
import CHECK_FALSE from '../../../assets/check-false.svg';
>>>>>>> todari

export interface CheckboxProps {
  state: boolean;
  handleClick: () => void;
<<<<<<< HEAD
  disabled?: boolean;
}

const Checkbox = ({ state, handleClick, disabled = false }: CheckboxProps) => {
  return (
    <S.CheckboxLabel>
      <S.Checkbox
        type="checkbox"
        checked={state}
        onChange={handleClick}
        disabled={disabled}
      />
      {state ? (
        <CHECK_TRUE className="icon-small" />
      ) : (
        <CHECK_FALSE className="icon-small" />
      )}
=======
}

const Checkbox = ({ state, handleClick }: CheckboxProps) => {
  return (
    <S.CheckboxLabel>
      <S.Checkbox type="checkbox" checked={state} onChange={handleClick} />
      <S.CheckboxImage src={state ? CHECK_TRUE : CHECK_FALSE} alt="체크박스" />
>>>>>>> todari
    </S.CheckboxLabel>
  );
};

export default Checkbox;
