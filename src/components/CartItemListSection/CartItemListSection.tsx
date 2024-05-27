<<<<<<< HEAD
import { useEffect } from 'react';

import Title from '../common/Title/Title';
import Spacer from '../common/Spacer/Spacer';
import * as S from './CartItemListSection.style';
import PriceTable from '../PriceTable/PriceTable';
import CartItemList from '../CartItemList/CartItemList';
import useApiErrorState from '../../hooks/error/useApiErrorState';
import useCartItemList from '../../hooks/cartItem/useCartItemList';
import useSelectedCouponList from '../../hooks/coupon/useSelectedCouponList';
import useSelectedCoupon from '../../hooks/coupon/useSelectedCoupon';

const CartItemListSection = () => {
  const { cartItemList, fetchCartItemList } = useCartItemList();
  const { toggleSelectedCoupon } = useSelectedCoupon();
  const { selectedCouponList } = useSelectedCouponList();
  const { apiError } = useApiErrorState();

  const unselectAllCoupon = () => {
    selectedCouponList.forEach((coupon) => toggleSelectedCoupon(coupon));
  };

  useEffect(() => {
    fetchCartItemList();
    unselectAllCoupon();
  }, []);

  if (apiError?.name === 'FailedFetchCartItemlistError') {
    throw apiError;
  }
=======
import * as S from './CartItemListSection.style';

import Title from '../common/Title/Title';
import Spacer from '../common/Spacer/Spacer';
import CartItemList from '../CartItemList/CartItemList';
import PriceTable from '../PriceTable/PriceTable';
import useCartItemList from '../../recoil/cartItemList/useCartItemList';
import useFetchCartItemList from '../../recoil/cartItemList/useFetchCartItemList';

const CartItemListSection = () => {
  const { cartItemList } = useCartItemList();
  const { fetchCartItemList } = useFetchCartItemList();
  fetchCartItemList();
>>>>>>> todari

  return (
    <S.CartItemListSection>
      <Title
        title="장바구니"
        description={`현재 ${cartItemList.length}종류의 상품이 담겨있습니다.`}
      />
      <Spacer height={36} />
<<<<<<< HEAD
      <CartItemList cartItemList={cartItemList} />
=======
      <CartItemList />
>>>>>>> todari
      <Spacer height={52} />
      <PriceTable />
    </S.CartItemListSection>
  );
};

export default CartItemListSection;
