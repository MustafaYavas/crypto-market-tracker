export const getCurrentHour = () => {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = ('0' + date.getSeconds()).slice(-2);

  return `${hour}:${minute}:${second}`;
};
