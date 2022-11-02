import { ComponentStory, ComponentMeta } from '@storybook/react';
import DayNumber from '.';

export default {
  title: 'Component/DayNumber',
  component: DayNumber,
} as ComponentMeta<typeof DayNumber>;

const Template: ComponentStory<typeof DayNumber> = args => (
  <DayNumber {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'blue',
  children: '1',
};
