import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';

export default {
  title: 'Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'filled',
  children: '버튼',
  disabled: true,
};
export const Ghost = Template.bind({});
Ghost.args = {
  buttonType: 'outline',
  children: '버튼',
  disabled: true,
};
