export const filter = (datas: CryptoCurrency[], key: string) => {
  return datas.filter((crypto: CryptoCurrency) =>
    crypto.name.toLowerCase().includes(key.toLowerCase())
  );
};
