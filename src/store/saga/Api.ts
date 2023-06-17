import { filter } from '../../helpers/dataFunctions/filterCryptos';
import { getMsMonthAgo } from '../../helpers/date';
import { AppDispatch } from '../configureStore';
import { fetchCryptos, setSearchedCryptosAfterUpdate } from '../slices/Crypto';
import { setModalData } from '../slices/Modal';

export const handleGetCryptos = async (
  order: string,
  searchText: string,
  dispatch: AppDispatch
) => {
  const response = await fetch(
    new Request('https://api.livecoinwatch.com/coins/list'),
    {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json',
        'x-api-key': process.env.REACT_APP_API_KEY!,
      }),
      body: JSON.stringify({
        currency: 'USD',
        sort: 'rank',
        order,
        offset: 0,
        limit: 500,
        meta: true,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const datas = await response.json();
  dispatch(fetchCryptos(datas));
  if (searchText) {
    const searchedArray = filter(datas, searchText);
    dispatch(setSearchedCryptosAfterUpdate(searchedArray));
  }
  return datas;
};

export const handleGetSingleCrypto = async (
  code: string,
  dispatch: AppDispatch
) => {
  const response = await fetch(
    new Request('https://api.livecoinwatch.com/coins/single/history'),
    {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json',
        'x-api-key': process.env.REACT_APP_API_KEY!,
      }),
      body: JSON.stringify({
        currency: 'USD',
        code,
        start: getMsMonthAgo(6),
        end: Date.now(),
        meta: true,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  dispatch(setModalData({ datas: data.history, name: code }));
  return data;
};
