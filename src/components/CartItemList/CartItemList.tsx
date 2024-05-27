import * as S from './CartItemList.style';
<<<<<<< HEAD
import CartItem from '../CartItem/CartItem';
import CheckboxWithLabel from '../CheckboxWithLabel/CheckboxWithLabel';
import { useSelectedCartItemIdList } from '../../hooks/cartItem/useSelectedCartItemIdList';

interface CartItemListProp {
  type?: 'cart' | 'confirm';
  cartItemList: CartItem[];
}

const CartItemList = ({ type = 'cart', cartItemList }: CartItemListProp) => {
  const { isSelectedAll, unselectAll, selectAll } = useSelectedCartItemIdList();

  return (
    <S.CartItemList>
      {type === 'cart' ? (
        <CheckboxWithLabel
          isChecked={isSelectedAll}
          onClick={isSelectedAll ? unselectAll : selectAll}
          labelText="전체선택"
        />
      ) : null}
      {cartItemList.map((cartItem: CartItem) => {
        return <CartItem type={type} key={cartItem.id} cartItem={cartItem} />;
=======

import CartItem from '../CartItem/CartItem';

import Checkbox from '../common/Checkbox/Checkbox';
import Text from '../common/Text/Text';

import { useCartItemSelectedIdList } from '../../recoil/cartItem/useCartItemSelectedIdList';
import useCartItemList from '../../recoil/cartItemList/useCartItemList';


const CartItemList = () => {
  const { cartItemList } = useCartItemList();
  const { isSelectedAll, unselectAll, selectAll } = useCartItemSelectedIdList();

  return (
    <S.CartItemList>
      <S.SelectAllContainer>
        <Checkbox state={isSelectedAll} handleClick={isSelectedAll ? unselectAll : selectAll} />
        <Text size="s" weight="m">
          전체선택
        </Text>
      </S.SelectAllContainer>
      {cartItemList.map(({ product, id }: CartItem) => {
        return <CartItem key={id} product={product} id={id} />;
>>>>>>> todari
      })}
    </S.CartItemList>
  );
};

export default CartItemList;
