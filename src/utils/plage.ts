// 등록할 때 문자열을 #로 나눠서 문자열배열로 변경해주는 함수
export const getTagToStringArray = (tag: string) => {
  const tagList = tag.replaceAll(' ', '').split('#');
  const result = tagList.filter(tag => tag !== '');
  return result;
};

export const getTagListToString = (tagList: string[]) => {
  let result = '';
  tagList.forEach(tag => {
    result += `#${tag}`;
  });
  return result;
};
