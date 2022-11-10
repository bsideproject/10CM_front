import { ComponentStory, ComponentMeta } from '@storybook/react';
import DatePicker from '.';

export default {
  title: 'Component/DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = args => (
  <DatePicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
