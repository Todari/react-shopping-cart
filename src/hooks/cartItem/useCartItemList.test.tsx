import { renderHook } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import useCartItemList from './useCartItemList';
import { cartItemListState } from '../../recoil/cartItem/atom';
import { act } from 'react';

jest.mock('../../apis/cartItemList', () => ({
  requestDeleteCartItem: jest.fn(),
}));

describe('useCartItemList', () => {
  const MOCK_DEFAULT_VALUE = [
    {
      id: 2463,
      quantity: 1,

      name: '코카콜라',
      price: 10000,
      imageUrl:
        'https://godomall.speedycdn.net/1cd80571a779bf8f2c08a18dc0965949/goods/1000000027/image/detail/1000000027_detail_012.jpg',
    },
    {
      id: 2464,
      quantity: 1,
      name: '나이키',
      price: 20000,
      imageUrl:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a28864e3-de02-48bb-b861-9c592bc9a68b/%EB%B6%81-1-ep-%EB%86%8D%EA%B5%AC%ED%99%94-UOp6QQvg.png',
    },
    {
      id: 2465,
      quantity: 1,
      name: '컨버스',
      price: 20000,
      imageUrl:
        'https://sitem.ssgcdn.com/65/73/69/item/1000163697365_i1_750.jpg',
    },
  ];

  const MOCK_SET_NEW_VALUE = [
    {
      id: 1234,
      quantity: 1,

      name: '펩시',
      price: 10000,
      imageUrl:
        'https://godomall.speedycdn.net/1cd80571a779bf8f2c08a18dc0965949/goods/1000000027/image/detail/1000000027_detail_012.jpg',
    },
    {
      id: 2345,
      quantity: 1,
      name: '퓨마',
      price: 20000,
      imageUrl:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a28864e3-de02-48bb-b861-9c592bc9a68b/%EB%B6%81-1-ep-%EB%86%8D%EA%B5%AC%ED%99%94-UOp6QQvg.png',
    },
    {
      id: 111,
      quantity: 1,
      name: '스니커즈',
      price: 20000,
      imageUrl:
        'https://sitem.ssgcdn.com/65/73/69/item/1000163697365_i1_750.jpg',
    },
  ];

  it('cartItemList는 저장된 상태와 같은 값을 불러와야 한다.', () => {
    const { result } = renderHook(() => useCartItemList(), {
      wrapper: ({ children }) => (
        <RecoilRoot
          initializeState={({ set }) =>
            set(cartItemListState, MOCK_DEFAULT_VALUE)
          }
        >
          {children}
        </RecoilRoot>
      ),
    });
    expect(result.current.cartItemList).toEqual(MOCK_DEFAULT_VALUE);
  });

  it('setCartItemList는 저장된 cartItemList상태를 전달한 상태로 변경해야 한다.', () => {
    const { result } = renderHook(() => useCartItemList(), {
      wrapper: ({ children }) => (
        <RecoilRoot
          initializeState={({ set }) =>
            set(cartItemListState, MOCK_DEFAULT_VALUE)
          }
        >
          {children}
        </RecoilRoot>
      ),
    });
    expect(result.current.cartItemList).toEqual(MOCK_DEFAULT_VALUE);
    act(() => result.current.setCartItemList(MOCK_SET_NEW_VALUE));
    expect(result.current.cartItemList).toEqual(MOCK_SET_NEW_VALUE);
  });

  it('deleteCartItem은 선택한 id를 cartItemList상태에서 제거해야 한다.', async () => {
    const { result } = renderHook(() => useCartItemList(), {
      wrapper: ({ children }) => (
        <RecoilRoot
          initializeState={({ set }) =>
            set(cartItemListState, MOCK_DEFAULT_VALUE)
          }
        >
          {children}
        </RecoilRoot>
      ),
    });
    expect(result.current.cartItemList).toEqual(MOCK_DEFAULT_VALUE);
    await act(
      async () => await result.current.deleteCartItem(MOCK_DEFAULT_VALUE[0].id),
    );
    expect(result.current.cartItemList).toEqual(
      MOCK_DEFAULT_VALUE.filter(({ id }) => id !== MOCK_DEFAULT_VALUE[0].id),
    );
  });

  it('deleteCartItem은 requestDeleteCartItem을 호출해야 한다.', async () => {
    const { result } = renderHook(() => useCartItemList(), {
      wrapper: ({ children }) => (
        <RecoilRoot
          initializeState={({ set }) =>
            set(cartItemListState, MOCK_DEFAULT_VALUE)
          }
        >
          {children}
        </RecoilRoot>
      ),
    });
    const { requestDeleteCartItem } = require('../../apis/cartItemList');
    await act(
      async () => await result.current.deleteCartItem(MOCK_DEFAULT_VALUE[0].id),
    );
    expect(requestDeleteCartItem).toHaveBeenCalledWith(
      MOCK_DEFAULT_VALUE[0].id,
    );
  });
});
