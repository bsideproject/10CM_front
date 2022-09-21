import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';

export default {
  title: 'Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  children: '버튼',
};
export const Ghost = Template.bind({});
Ghost.args = {
  buttonType: 'ghost',
};
