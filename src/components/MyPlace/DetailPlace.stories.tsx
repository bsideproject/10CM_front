import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import DetailPlace from './DetailPlace';

export default {
  title: 'Component/DetailPlace',
  component: DetailPlace,
} as ComponentMeta<typeof DetailPlace>;

const Template: ComponentStory<typeof DetailPlace> = args => {
  const [string, setString] = useState<string>('');
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setString(e.target.value);
  };
  return <DetailPlace {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
