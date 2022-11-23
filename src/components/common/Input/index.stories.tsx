import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import Input from '.';

export default {
  title: 'Component/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => {
  const [string, setString] = useState<string>('');
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setString(e.target.value);
  };
  return <Input {...args} value={string} onChange={handleChangeValue} />;
};

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  count: true,
  placeholder: '텍스트입력',
};
