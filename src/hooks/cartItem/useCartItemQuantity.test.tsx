import { act } from 'react';

import { RecoilRoot } from 'recoil';

import { renderHook } from '@testing-library/react';

import { useCartItemQuantity } from './useCartItemQuantity';
import { cartItemListState } from '../../recoil/cartItem/atom';

jest.mock('../../apis/cartItemList', () => ({
  requestSetCartItemQuantity: jest.fn(),
}));

describe('useCartItemQuantity', () => {
  const MOCK_DEFAULT_VALUE = [
    {
      id: 2463,
      quantity: 2,
      name: '코카콜라',
      price: 10000,
      imageUrl:
        'https://godomall.speedycdn.net/1cd80571a779bf8f2c08a18dc0965949/goods/1000000027/image/detail/1000000027_detail_012.jpg',
    },
    {
      id: 2464,
      quantity: 3,
      name: '나이키',
      price: 20000,
      imageUrl:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a28864e3-de02-48bb-b861-9c592bc9a68b/%EB%B6%81-1-ep-%EB%86%8D%EA%B5%AC%ED%99%94-UOp6QQvg.png',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('cartItemQuantity는 저장된 "카트 아이템 수량" 상태와 같은 값을 불러와야 한다.', () => {
    const { result } = renderHook(() => useCartItemQuantity(), {
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
    expect(result.current.cartItemQuantity(MOCK_DEFAULT_VALUE[0].id)).toEqual(
      MOCK_DEFAULT_VALUE[0].quantity,
    );
  });

  it('increaseQuantity는 해당 id 카트 아이디의 수량을 증가시켜야 한다.', async () => {
    const { result } = renderHook(() => useCartItemQuantity(), {
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
    await act(
      async () =>
        await result.current.increaseQuantity(MOCK_DEFAULT_VALUE[0].id),
    );
    expect(result.current.cartItemQuantity(MOCK_DEFAULT_VALUE[0].id)).toEqual(
      MOCK_DEFAULT_VALUE[0].quantity + 1,
    );
  });

  it('increaseQuantity는 requestSetCartItemQuantity를 호출해야 한다.', async () => {
    const { result } = renderHook(() => useCartItemQuantity(), {
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
    const { requestSetCartItemQuantity } = require('../../apis/cartItemList');
    await act(
      async () =>
        await result.current.increaseQuantity(MOCK_DEFAULT_VALUE[0].id),
    );
    expect(requestSetCartItemQuantity).toHaveBeenCalledWith(
      MOCK_DEFAULT_VALUE[0].id,
      MOCK_DEFAULT_VALUE[0].quantity + 1,
    );
  });

  it('decreaseQuantity는 해당 id 카트 아이디의 수량을 감소시켜야 한다.', async () => {
    const { result } = renderHook(() => useCartItemQuantity(), {
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
    await act(
      async () =>
        await result.current.decreaseQuantity(MOCK_DEFAULT_VALUE[1].id),
    );
    expect(result.current.cartItemQuantity(MOCK_DEFAULT_VALUE[1].id)).toEqual(
      MOCK_DEFAULT_VALUE[1].quantity - 1,
    );
  });

  it('decreaseQuantity는 requestSetCartItemQuantity를 호출해야 한다.', async () => {
    const { result } = renderHook(() => useCartItemQuantity(), {
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
    const { requestSetCartItemQuantity } = require('../../apis/cartItemList');
    await act(
      async () =>
        await result.current.decreaseQuantity(MOCK_DEFAULT_VALUE[0].id),
    );
    expect(requestSetCartItemQuantity).toHaveBeenCalledWith(
      MOCK_DEFAULT_VALUE[0].id,
      MOCK_DEFAULT_VALUE[0].quantity - 1,
    );
  });
});
