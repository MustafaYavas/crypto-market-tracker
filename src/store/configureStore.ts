import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import Saga from './saga/Saga';
import cryptoSlice from './slices/Crypto';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cryptos: cryptoSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(Saga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
