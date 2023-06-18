import { useEffect, useState } from 'react';

import CryptoTable from '../../components/CryptoTable/CryptoTable';
import styles from './Prices.module.scss';
import { getCurrentHour } from '../../helpers/date';
import { useAppDispatch } from '../../App';
import Search from '../../components/Search/Search';
import { RootState } from '../../store/configureStore';
import { connect } from 'react-redux';
import CryptoModal from '../../components/CryptoModal/CryptoModal';
import { fetchCryptos } from '../../store/slices/Crypto';

type PricesProps = {
  searchText: string;
};

const Prices = ({ searchText }: PricesProps) => {
  const [limit, setLimit] = useState<number>(50);
  const [currentTime, setCurrentTime] = useState(getCurrentHour());
  const [order, setOrder] = useState('ascending');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCryptos(searchText));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentHour());
      dispatch(fetchCryptos(searchText));
    }, 10000);

    return () => clearInterval(interval);
  }, [dispatch, searchText]);

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
      <div className="d-flex flex-column justify-content-center align-items-center w-100">
        <span className="text-white text-md-danger fs-4 fw-bolder">
          Cryptocurrency Prices Live
        </span>
        <span className="d-none d-md-inline text-white fs-5 mb-0">
          Top Coins by Market Cap
        </span>
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

      <CryptoModal />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    searchText: state.cryptos.searchText,
    isOpen: state.modal.isOpen,
  };
};

export default connect(mapStateToProps)(Prices);
