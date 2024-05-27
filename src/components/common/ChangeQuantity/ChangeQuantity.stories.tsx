import type { Meta, StoryObj } from '@storybook/react';
import ChangeQuantity from './ChangeQuantity';
import { useState } from 'react';

const meta = {
  title: 'Components/ChangeQuantity',
  component: ChangeQuantity,
  tags: ['autodocs'],
  argTypes: {
    quantity: {
      description: '',
      control: { type: 'number' },
    },
<<<<<<< HEAD
=======
    decreaseQuantity: {
      description: '',
      // control: { type: 'number' }
    },
    increaseQuantity: {
      description: '',
      // control: { type: 'number' }
    },
>>>>>>> todari
  },
} satisfies Meta<typeof ChangeQuantity>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  decorators: [
    () => {
<<<<<<< HEAD
      const [value, setValue] = useState(3);
=======
      const [value, setValue] = useState(0);
>>>>>>> todari
      return (
        <ChangeQuantity
          quantity={value}
          decreaseQuantity={() => setValue((prev) => Math.max(prev - 1, 0))}
          increaseQuantity={() => setValue((prev) => prev + 1)}
        />
      );
    },
  ],
};
