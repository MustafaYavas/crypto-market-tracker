import { useEffect, useState } from 'react';

import CryptoTable from '../../components/CryptoTable/CryptoTable';
import styles from './Prices.module.scss';
import { getCurrentHour } from '../../helpers/date';
import { handleGetCryptos } from '../../store/saga/Api';
import { useAppDispatch } from '../../App';
import Search from '../../components/Search/Search';
import { RootState } from '../../store/configureStore';
import { connect } from 'react-redux';

type PricesProps = {
  searchText: string;
};

const Prices = ({ searchText }: PricesProps) => {
  const [limit, setLimit] = useState<number>(50);
  const [currentTime, setCurrentTime] = useState(getCurrentHour());
  const [order, setOrder] = useState('ascending');
  const dispatch = useAppDispatch();

  handleGetCryptos(order, searchText, dispatch);

  useEffect(() => {
    const timeout = setInterval(() => {
      setCurrentTime(getCurrentHour());
      handleGetCryptos(order, searchText, dispatch);
    }, 30000);

    return () => clearTimeout(timeout);
  }, [dispatch, order, searchText]);

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

      <Search />

      <CryptoTable
        limit={limit}
        currentTime={currentTime}
        order={order}
        changeOrder={changeOrder}
      />

      {!searchText && (
        <div className={`mb-5 text-center ${styles['show-btn']}`}>
          {limit < 500 && (
            <button onClick={handleIncreaseLimit}>Show more</button>
          )}
          {limit === 500 && (
            <button onClick={handleDecreaseLimit}>Show less</button>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    searchText: state.cryptos.searchText,
  };
};

export default connect(mapStateToProps)(Prices);
