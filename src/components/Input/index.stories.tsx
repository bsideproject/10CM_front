import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '.';

export default {
  title: 'Component/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};
export const Ghost = Template.bind({});
Ghost.args = {
  disabled: false,
};
