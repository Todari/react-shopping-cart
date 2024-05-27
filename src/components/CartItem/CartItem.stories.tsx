import type { Meta, StoryObj } from '@storybook/react';
import CartItem from './CartItem';
import { RecoilRoot } from 'recoil';
<<<<<<< HEAD
import { cartItemListState } from '../../recoil/cartItem/atom';

const MOCK_DATA = {
  id: 11,
  name: '리복',
  price: 23000,
  quantity: 4,
  imageUrl:
    'https://image.msscdn.net/images/goods_img/20221031/2909092/2909092_6_500.jpg',
};
=======

>>>>>>> todari
const meta = {
  title: 'Components/CartItem',
  component: CartItem,
  tags: ['autodocs'],
  argTypes: {
<<<<<<< HEAD
    type: {
      description: '',
      control: { type: 'radio' },
      options: ['cart', 'confirm'],
    },
    cartItem: {
      description: '',
      control: { type: 'object' },
    },
  },
  args: { type: 'cart', cartItem: MOCK_DATA },
=======
    product: {
      description: '',
      control: { type: 'object' },
    },
    quantity: {
      description: '',
      control: { type: 'number', min: 1 },
    },
    id: {
      description: '',
    },
  },
  args: {
    product: {
      id: 3,
      name: '아디다스',
      price: 2000,
      imageUrl:
        'https://sitem.ssgcdn.com/74/25/04/item/1000373042574_i1_750.jpg',
      category: 'fashion',
    },
    quantity: 1,
    id: 1,
  },
>>>>>>> todari
} satisfies Meta<typeof CartItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
<<<<<<< HEAD
  render: ({ type, cartItem }) => {
    return (
      <RecoilRoot
        initializeState={({ set }) => set(cartItemListState, [MOCK_DATA])}
      >
        <div style={{ width: '430px' }}>
          <CartItem type={type} cartItem={cartItem} />
=======
  render: ({ ...args }: CartItem) => {
    return (
      <RecoilRoot>
        <div style={{ width: '430px' }}>
          <CartItem {...args} />
>>>>>>> todari
        </div>
      </RecoilRoot>
    );
  },
};
