import { RootState } from '../../store/configureStore';
import Icon from '../Icon/Icon';
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton';
import styles from './CryptoTable.module.scss';
import CryptoTableDatas from './CryptoTableDatas';

import { connect } from 'react-redux';

type CryptoTableProps = {
  cryptos: CryptoCurrency[];
  limit: number;
  currentTime: string;
  order: string;
  changeOrder: () => void;
};

const CryptoTable = ({
  cryptos,
  limit,
  currentTime,
  order,
  changeOrder,
}: CryptoTableProps) => {
  return (
    <>
      {cryptos.length === 0 && (
        <div className="my-5 overflow-hidden">
          <LoadingSkeleton width={1500} height={750} />
        </div>
      )}

      {cryptos.length > 0 && (
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

            <CryptoTableDatas limit={limit} />
          </table>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    cryptos: state.cryptos.cryptos,
  };
};

export default connect(mapStateToProps)(CryptoTable);
