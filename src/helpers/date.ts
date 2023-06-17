export const getCurrentHour = () => {
  const date = new Date();
  let hour = date.getHours();
  let minute = ('0' + date.getMinutes()).slice(-2);
  let second = ('0' + date.getSeconds()).slice(-2);

  return `${hour}:${minute}:${second}`;
};

export const getMsMonthAgo = (month: number) => {
  let d = new Date();
  let m = d.getMonth();
  d.setMonth(d.getMonth() - month);

  if (d.getMonth() === m) d.setDate(0);
  return d.setHours(0, 0, 0, 0);
};

export const getDateFromMs = (time: number) => {
  const date = new Date(time);
  const yyyy = date.getFullYear();
  let mm: number | string = date.getMonth() + 1; // Months start at 0!
  let dd: number | string = date.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  return dd + '/' + mm + '/' + yyyy;
};
