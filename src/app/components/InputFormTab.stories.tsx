import type { Meta, StoryObj } from '@storybook/react';

import InputFormTab from './InputFormTab';

const meta = {
  component: InputFormTab,
} satisfies Meta<typeof InputFormTab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};