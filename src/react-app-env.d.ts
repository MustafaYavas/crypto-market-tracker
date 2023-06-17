/// <reference types="react-scripts" />

type CryptoCurrency = {
  name: string;
  symbol: string;
  rank: number;
  age: number;
  color: string;
  png32: string;
  png64: string;
  webp32: string;
  webp64: string;
  exchanges: number;
  markets: number;
  pairs: number;
  categories: [];
  allTimeHighUSD: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  links: {
    website: string;
    whitepaper: string;
    twitter: null;
    reddit: string;
    telegra: null;
    discord: null;
    medium: null;
    instagram: null;
  };
  code: string;
  rate: number;
  volume: number;
  cap: number;
  delta: {
    hour: number;
    day: number;
    week: number;
    month: number;
    quarter: number;
    year: number;
  };
};

type SingleCryptoHistoryDatas = {
  date: number;
  rate: number;
  volume: number;
  cap: number;
  liquidity: number;
};
