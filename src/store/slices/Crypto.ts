import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type cryptoState = {
  cryptos: CryptoCurrency[];
};

const initialCryptoState: cryptoState = {
  cryptos: [],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: initialCryptoState,
  reducers: {
    fetchCryptos: (state, action: PayloadAction<CryptoCurrency[]>) => {
      state.cryptos = action.payload;
    },
  },
});

export const { fetchCryptos } = cryptoSlice.actions;
export default cryptoSlice.reducer;
