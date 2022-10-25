import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';

export default {
  title: 'Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  buttonType: 'filled',
  children: '버튼',
  disabled: true,
};
export const Outline = Template.bind({});
Outline.args = {
  buttonType: 'outline',
  children: '버튼',
  disabled: true,
};
