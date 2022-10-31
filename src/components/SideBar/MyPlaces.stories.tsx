import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import MyPlaces from './MyPlaces';

export default {
  title: 'Component/MyPlaces',
  component: MyPlaces,
} as ComponentMeta<typeof MyPlaces>;

const Template: ComponentStory<typeof MyPlaces> = args => {
  const [string, setString] = useState<string>('');
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setString(e.target.value);
  };
  return <MyPlaces {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
