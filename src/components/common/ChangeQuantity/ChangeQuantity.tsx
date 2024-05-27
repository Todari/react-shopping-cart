<<<<<<< HEAD
import Text from '../Text/Text';
import Button from '../Button/Button';
import * as S from './ChangeQuantity.style';
import PLUS from '../../../assets/plus.svg?react';
import MINUS from '../../../assets/minus.svg?react';
=======
import * as S from './ChangeQuantity.style';

import Button from '../Button/Button';

import PLUS from '../../../assets/plus.svg';
import MINUS from '../../../assets/minus.svg';
import Text from '../Text/Text';
>>>>>>> todari

export interface ChangeQuantityProps {
  quantity: number;
  decreaseQuantity: () => void;
  increaseQuantity: () => void;
}

<<<<<<< HEAD
const ChangeQuantity = ({
  quantity,
  decreaseQuantity,
  increaseQuantity,
}: ChangeQuantityProps) => {
  return (
    <S.ChangeQuantity>
      <Button
        size="s"
        onClick={decreaseQuantity}
        square={true}
        isDisabled={quantity === 1}
        aria-label="minus"
      >
        <MINUS />
=======
const ChangeQuantity = ({ quantity, decreaseQuantity, increaseQuantity }: ChangeQuantityProps) => {
  return (
    <S.ChangeQuantity>
      <Button size="s" onClick={decreaseQuantity} square={true} isDisabled={quantity === 1} aria-label="minus">
        <img src={MINUS} alt='minus-image' />
>>>>>>> todari
      </Button>
      <S.Quantity>
        <Text weight="m">{quantity}</Text>
      </S.Quantity>
<<<<<<< HEAD
      <Button
        size="s"
        onClick={increaseQuantity}
        square={true}
        aria-label="plus"
      >
        <PLUS />
=======
      <Button size="s" onClick={increaseQuantity} square={true} aria-label="plus">
        <img src={PLUS} alt='plus-image' />
>>>>>>> todari
      </Button>
    </S.ChangeQuantity>
  );
};

export default ChangeQuantity;
