type SplitType = 'dash' | 'dot';

export const convertDate = (date: Date, type: SplitType): string => {
  const splitDate = date.toLocaleDateString().split('.');
  if (type === 'dash') {
    return `${splitDate[0]}-${splitDate[1].slice(1)}-${splitDate[2].slice(1)}`;
  }
  return `${splitDate[0]}.${splitDate[1]}.${splitDate[2]} `;
};

export const initFromDate = convertDate(new Date(), 'dash');

export const initToDate = convertDate(
  new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
  'dash',
);
