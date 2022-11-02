import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyPlaceGroup from './MyPlaceGroup';

export default {
  title: 'Component/MyPlaceGroup',
  component: MyPlaceGroup,
} as ComponentMeta<typeof MyPlaceGroup>;

const Template: ComponentStory<typeof MyPlaceGroup> = args => {
  return <MyPlaceGroup {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
