import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyPlaceCard from '.';

export default {
  title: 'Component/MyPlaceCard',
  component: MyPlaceCard,
} as ComponentMeta<typeof MyPlaceCard>;

const Template: ComponentStory<typeof MyPlaceCard> = args => {
  return <MyPlaceCard {...args} />;
};

export const Blink = Template.bind({});
Blink.args = {
  type: 'blink',
};
export const Flow = Template.bind({});
Flow.args = {
  type: 'flow',
};
