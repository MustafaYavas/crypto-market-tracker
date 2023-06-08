import { useEffect, useState } from 'react';

import CryptoTable from '../../components/CryptoTable/CryptoTable';
import styles from './Prices.module.scss';
import { getCurrentHour } from '../../helpers/date';

const Prices = () => {
  const [cryptos, setCryptos] = useState<CryptoCurrency[]>([]);
  const [limit, setLimit] = useState<number>(50);
  const [currentTime, setCurrentTime] = useState('');
  const [order, setOrder] = useState('ascending');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    async function getLatestPrice() {
      setIsLoading(true);
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
            order: order,
            offset: 0,
            limit: 500,
            meta: true,
          }),
        }
      );

      if (!response.ok) {
        setIsLoading(false);
        throw new Error(response.statusText);
      }

      const datas = await response.json();
      setIsLoading(false);
      setCurrentTime(getCurrentHour());
      setCryptos(datas);
      timeoutId = setTimeout(getLatestPrice, 15000);
    }

    getLatestPrice();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [order]);

  const handleIncreaseLimit = () => {
    setLimit((prev) => prev + 50);
  };

  const handleDecreaseLimit = () => {
    setLimit(50);
  };

  const changeOrder = () => {
    setOrder(order === 'ascending' ? 'descending' : 'ascending');
  };

  return (
    <div className={`base-container ${styles['prices-container']}`}>
      <div className="text-center">
        <h2 className="text-white fs-2 fw-bolder">
          Cryptocurrency Prices Live
        </h2>
        <h4 className="text-white fs-3 mb-0">Top Coins by Market Cap</h4>
      </div>

      <CryptoTable
        cryptos={cryptos}
        limit={limit}
        currentTime={currentTime}
        order={order}
        changeOrder={changeOrder}
        isLoading={isLoading}
      />

      <div className={`mb-5 text-center ${styles['show-btn']}`}>
        {limit < 500 && (
          <button onClick={handleIncreaseLimit}>Show more</button>
        )}
        {limit === 500 && (
          <button onClick={handleDecreaseLimit}>Show less</button>
        )}
      </div>
    </div>
  );
};

export default Prices;
