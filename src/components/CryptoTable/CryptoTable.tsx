import { RootState } from '../../store/configureStore';
import Icon from '../Icon/Icon';
import LoadingSkeleton from '../Loading/LoadingSkeleton/LoadingSkeleton';
import styles from './CryptoTable.module.scss';
import CryptoTableDatas from './CryptoTableDatas';

import { connect } from 'react-redux';

type CryptoTableProps = {
  isCryptosLoading: boolean;
  cryptos: CryptoCurrency[];
  limit: number;
  currentTime: string;
  order: string;
  changeOrder: () => void;
  searchText: string;
  searchedCryptos: CryptoCurrency[];
};

const CryptoTable = ({
  isCryptosLoading,
  cryptos,
  limit,
  currentTime,
  order,
  changeOrder,
  searchText,
  searchedCryptos,
}: CryptoTableProps) => {
  return (
    <>
      {isCryptosLoading && cryptos.length === 0 && (
        <div className="my-5 overflow-hidden">
          <LoadingSkeleton width={1500} height={750} />
        </div>
      )}

      {!searchText && cryptos.length > 0 && (
        <div className={`${styles['crypto-table']} my-5`}>
          <div className="pt-2 d-flex justify-content-between align-items-center mx-4">
            <h3 className="d-none d-md-inline text-white text-xl font-semibold">
              Prices
            </h3>

            <p className="text-light text-end m-0">
              Last update: {currentTime}
            </p>
          </div>

          <table className={styles.table}>
            <thead className="border-bottom border-top border-secondary">
              <tr
                className={`text-light text-center ${styles['table-header']} cursor-default`}
              >
                <th className={styles.name}>Name</th>
                <th>Symbol</th>
                <th>Price</th>
                <th
                  className={`d-flex justify-content-center align-items-center gap-1 
              ${styles['market-cap']} cursor-pointer`}
                  onClick={changeOrder}
                >
                  <span>Market Cap</span>
                  {order === 'ascending' ? (
                    <span title="descending">
                      <Icon name="BsArrowDownShort" size={20} color="white" />
                    </span>
                  ) : (
                    <span title="ascending">
                      <Icon name="BsArrowUpShort" size={20} color="white" />
                    </span>
                  )}
                </th>
                <th>Hour</th>
                <th>Day</th>
                <th>Week</th>
                <th>Month</th>
                <th>Year</th>
              </tr>
            </thead>

            <CryptoTableDatas limit={limit} cryptos={cryptos} />
          </table>
        </div>
      )}
      {searchText && searchedCryptos?.length > 0 && (
        <div className={`${styles['crypto-table']} my-5`}>
          <div className="pt-2 d-flex justify-content-between align-items-center mx-4">
            <h3 className="text-white text-xl font-semibold">Prices</h3>

            <p className="text-light text-end m-0">
              Last update: {currentTime}
            </p>
          </div>

          <table className={styles.table}>
            <thead className="border-bottom border-top border-secondary">
              <tr
                className={`text-light text-center ${styles['table-header']} cursor-default`}
              >
                <th className={styles.name}>Name</th>
                <th>Symbol</th>
                <th>Price</th>
                <th
                  className={`d-flex justify-content-center align-items-center gap-1 
              ${styles['market-cap']} cursor-pointer`}
                  onClick={changeOrder}
                >
                  <span>Market Cap</span>
                  {order === 'ascending' ? (
                    <span title="descending">
                      <Icon name="BsArrowDownShort" size={20} color="white" />
                    </span>
                  ) : (
                    <span title="ascending">
                      <Icon name="BsArrowUpShort" size={20} color="white" />
                    </span>
                  )}
                </th>
                <th>Hour</th>
                <th>Day</th>
                <th>Week</th>
                <th>Month</th>
                <th>Year</th>
              </tr>
            </thead>

            <CryptoTableDatas limit={limit} cryptos={searchedCryptos} />
          </table>
        </div>
      )}

      {searchText && searchedCryptos?.length === 0 && (
        <div className="mt-5 vh-100">
          <p className="text-light fs-3 text-center">Not found</p>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    cryptos: state.cryptos.cryptos,
    searchText: state.cryptos.searchText,
    searchedCryptos: state.cryptos.searchedCryptos,
    isCryptosLoading: state.cryptos.isCryptosLoading,
  };
};

export default connect(mapStateToProps)(CryptoTable);
