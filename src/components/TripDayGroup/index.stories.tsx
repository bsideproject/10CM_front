import { ComponentStory, ComponentMeta } from '@storybook/react';
import TripDayGroup from '.';

export default {
  title: 'Component/TripDayGroup',
  component: TripDayGroup,
} as ComponentMeta<typeof TripDayGroup>;

const Template: ComponentStory<typeof TripDayGroup> = args => (
  <TripDayGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  number: 1,
  title: '우리집',
  address: '선유서로 34길 11-2',
  phone: '010-9002-4823',
  onDeleteClick: () => console.log('good'),
};
