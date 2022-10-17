import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import Textarea from '.';

export default {
  title: 'Component/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = args => {
  const [string, setString] = useState<string>('');
  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setString(e.target.value);
  };
  return <Textarea {...args} value={string} onChange={handleChangeValue} />;
};

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  count: true,
  placeholder: '텍스트입력',
};
