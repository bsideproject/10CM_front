import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import SearchAddress from './SearchAddress';

export default {
  title: 'Component/SearchAddress',
  component: SearchAddress,
} as ComponentMeta<typeof SearchAddress>;

const Template: ComponentStory<typeof SearchAddress> = args => {
  const [string, setString] = useState<string>('');
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setString(e.target.value);
  };
  return <SearchAddress {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
