import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { filter } from '../../helpers/dataFunctions/filterCryptos';

type cryptoState = {
  isCryptosLoading: boolean;
  cryptos: CryptoCurrency[];
  searchText: string;
  searchedCryptos: CryptoCurrency[];
};

const initialCryptoState: cryptoState = {
  isCryptosLoading: false,
  cryptos: [],
  searchText: '',
  searchedCryptos: [],
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: initialCryptoState,
  reducers: {
    fetchCryptos: (state, action: PayloadAction<string>) => {
      state.isCryptosLoading = true;
      return state;
    },
    setCryptos: (state, action: PayloadAction<CryptoCurrency[]>) => {
      state.cryptos = action.payload;
      state.isCryptosLoading = false;
    },
    searchCrypto: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      state.searchText = key;
      state.searchedCryptos = filter(state.cryptos, state.searchText);
    },
    setSearchedCryptosAfterUpdate: (
      state,
      action: PayloadAction<CryptoCurrency[]>
    ) => {
      state.searchedCryptos = action.payload;
    },
  },
});

export const {
  fetchCryptos,
  setCryptos,
  searchCrypto,
  setSearchedCryptosAfterUpdate,
} = cryptoSlice.actions;
export default cryptoSlice.reducer;
