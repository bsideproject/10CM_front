import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import Skeleton from '.';

export default {
  title: 'Component/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = args => {
  return <Skeleton {...args} />;
};

export const Blink = Template.bind({});
Blink.args = {
  type: 'blink',
};
export const Flow = Template.bind({});
Flow.args = {
  type: 'flow',
};
