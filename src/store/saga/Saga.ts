import { call, put, takeLatest } from 'redux-saga/effects';

import { handleGetCryptos, handleGetSingleCrypto } from './Api';
import {
  setCryptos,
  fetchCryptos,
  setSearchedCryptosAfterUpdate,
} from '../slices/Crypto';
import { filter } from '../../helpers/dataFunctions/filterCryptos';
import { fetchModalData, setModalData } from '../slices/Modal';

export const workFetchCryptos = function* ({ payload }: any) {
  const result: CryptoCurrency[] = yield call(handleGetCryptos);
  yield put(setCryptos(result));

  if (payload) {
    const searchedArray = filter(result, payload);
    yield put(setSearchedCryptosAfterUpdate(searchedArray));
  }
};

export const workFetchModalDatas = function* ({ payload }: any) {
  const result: SingleCryptoHistoryDatas[] = yield call(
    handleGetSingleCrypto,
    payload
  );
  yield put(setModalData({ datas: result, name: payload }));
};

const Saga = function* () {
  yield takeLatest(fetchCryptos.type, workFetchCryptos);
  yield takeLatest(fetchModalData.type, workFetchModalDatas);
};
export default Saga;
