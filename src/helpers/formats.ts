const numberWithCommas = (number: string) => {
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const formatPrice = (price: number) => {
  const priceStr = price.toString();
  const firstPart = priceStr.split('.')[0];
  if (firstPart.length > 3) {
    return numberWithCommas(firstPart);
  } else {
    return firstPart + ',' + priceStr.split('.')[1].substring(0, 3);
  }
};

export const formatCap = (cap: number) => {
  return Math.abs(cap) >= 1.0e9
    ? (Math.abs(cap) / 1.0e9).toFixed(3) + ' B'
    : // Six Zeroes for Millions
    Math.abs(cap) >= 1.0e6
    ? (Math.abs(cap) / 1.0e6).toFixed(3) + ' M'
    : // Three Zeroes for Thousands
    Math.abs(cap) >= 1.0e3
    ? (Math.abs(cap) / 1.0e3).toFixed(3) + ' K'
    : Math.abs(cap);
};

export const formatPercentage = (percentage: number) => {
  if (percentage === 1) return 0;
  else return (Math.abs(percentage - 1) * 100).toFixed(2);
};
