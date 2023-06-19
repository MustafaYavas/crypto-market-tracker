import { connect } from 'react-redux';
import { useAppDispatch } from '../../App';
import { RootState } from '../../store/configureStore';
import { searchCrypto } from '../../store/slices/Crypto';
import Icon from '../Icon/Icon';
import styles from './Search.module.scss';

import { useState } from 'react';
import LoadingSkeleton from '../Loading/LoadingSkeleton/LoadingSkeleton';

type SearchProps = {
  isCryptosLoading: boolean;
  cryptos: CryptoCurrency[];
};

const Search = ({ isCryptosLoading, cryptos }: SearchProps) => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    const timer = setTimeout(() => {
      dispatch(searchCrypto(e.target.value));
    }, 500);

    return () => clearTimeout(timer);
  };

  const handleClearSearch = () => {
    setSearchText('');
    dispatch(searchCrypto(''));
  };

  return (
    <>
      {isCryptosLoading && cryptos.length === 0 && (
        <div
          className="my-5 overflow-hidden text-center"
          style={{ borderRadius: '8px' }}
        >
          <LoadingSkeleton width={250} height={40} />
        </div>
      )}

      {cryptos.length > 0 && (
        <div className="mt-5 w-100 d-flex justify-content-center align-items-center">
          <div className={styles.search}>
            <Icon name="AiOutlineSearch" size={22} color="white" />
            <input
              type="text"
              placeholder="Search cryptocurrency"
              value={searchText}
              onChange={(e) => handleSearch(e)}
            />

            <span
              onClick={handleClearSearch}
              className={`${searchText ? 'visible' : 'invisible'}`}
            >
              <Icon name="AiFillCloseCircle" size={22} color="white" />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isCryptosLoading: state.cryptos.isCryptosLoading,
    cryptos: state.cryptos.cryptos,
  };
};

export default connect(mapStateToProps)(Search);
