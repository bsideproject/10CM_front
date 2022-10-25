import { ComponentStory, ComponentMeta } from '@storybook/react';
import TripDayCard from '.';

export default {
  title: 'Component/TripDayCard',
  component: TripDayCard,
} as ComponentMeta<typeof TripDayCard>;

const Template: ComponentStory<typeof TripDayCard> = args => (
  <TripDayCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  number: 1,
  title: '우리집',
  address: '선유서로 34길 11-2',
  phone: '010-9002-4823',
  onDeleteClick: () => console.log('good'),
};
