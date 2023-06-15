import { AppDispatch } from '../configureStore';
import { fetchCryptos } from '../slices/Crypto';

export const handleGetCryptos = async (
  order: string,
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
  return datas;
};
