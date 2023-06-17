import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { filter } from '../../helpers/dataFunctions/filterCryptos';

type cryptoState = {
  cryptos: CryptoCurrency[];
  searchText: string;
  searchedCryptos: CryptoCurrency[];
};

const initialCryptoState: cryptoState = {
  cryptos: [],
  searchText: '',
  searchedCryptos: [],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: initialCryptoState,
  reducers: {
    fetchCryptos: (state, action: PayloadAction<CryptoCurrency[]>) => {
      state.cryptos = action.payload;
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

export const { fetchCryptos, searchCrypto, setSearchedCryptosAfterUpdate } =
  cryptoSlice.actions;
export default cryptoSlice.reducer;
