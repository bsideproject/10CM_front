// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { useState } from 'react';
// import TripDayGroup, { Item } from '.';

// export default {
//   title: 'Component/TripDayGroup',
//   component: TripDayGroup,
// } as ComponentMeta<typeof TripDayGroup>;

// const Template: ComponentStory<typeof TripDayGroup> = args => {
//   const [itemList, setItemList] = useState<Item[]>([
//     {
//       number: 1,
//       phone: '010-9002-4823',
//       address: '양평역 1번출구',
//       title: '끝',
//     },
//     {
//       number: 2,
//       phone: '010-9002-4822',
//       address: '양평역 2번출구',
//       title: '입',
//     },
//     {
//       number: 3,
//       phone: '010-9002-4833',
//       address: '양평역 3번출구',
//       title: '니',
//     },
//     {
//       number: 4,
//       phone: '010-9002-4844',
//       address: '양평역 4번출구',
//       title: '다',
//     },
//   ]);
//   const handleChangeItemList = (itemList: Item[]) => {
//     setItemList(itemList);
//   };

//   return (
//     <TripDayGroup
//       {...args}
//       itemList={itemList}
//       onChangeList={handleChangeItemList}
//     />
//   );
// };

// export const Primary = Template.bind({});
// Primary.args = {};

export const empty = '';
