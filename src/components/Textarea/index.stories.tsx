import { ComponentStory, ComponentMeta } from '@storybook/react';
import Textarea from '.';

export default {
  title: 'Component/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = args => (
  <Textarea {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};
