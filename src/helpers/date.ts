export const getCurrentHour = () => {
  const date = new Date();
  let hour = date.getHours();
  let minute = ('0' + date.getMinutes()).slice(-2);
  let second = ('0' + date.getSeconds()).slice(-2);

  return `${hour}:${minute}:${second}`;
};
