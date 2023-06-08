import styles from './CryptoTable.module.scss';
import {
  formatCap,
  formatPercentage,
  formatPrice,
} from '../../helpers/formats';

type CryptoTableDatasProps = {
  cryptos: CryptoCurrency[];
  limit: number;
};

const CryptoTableDatas = ({ cryptos, limit }: CryptoTableDatasProps) => {
  const setChar = (rate: number) => {
    if (rate > 1) return '+';
    else if (rate === 1) return '';
    else return '-';
  };

  const setBgColor = (rate: number) => {
    if (rate > 1) return styles.green;
    else if (rate === 1) return '';
    else return styles.red;
  };

  return (
    <tbody>
      {cryptos.slice(0, limit).map((crypto) => (
        <tr
          key={crypto.code}
          className={`text-center ${styles['table-row']}`}
          style={{ color: 'var(--text-secondary)' }}
        >
          <td
            className="d-flex align-items-center gap-2 text-start"
            role={crypto?.links?.website && 'button'}
            onClick={() => window.open(crypto?.links?.website)}
          >
            <img
              className={styles['table-row-image']}
              src={crypto.png32}
              alt="crypto-img"
            />
            {crypto.name}
          </td>
          <td>{crypto.code}</td>
          <td title={crypto?.rate?.toString()}>
            {crypto.rate ? `$${formatPrice(crypto.rate)}` : '-'}
          </td>
          <td title={crypto?.cap?.toString()}>{formatCap(crypto.cap)} $</td>
          <td title="Last one hour" className={setBgColor(crypto.delta.hour)}>
            {setChar(crypto.delta.hour)}%{formatPercentage(crypto.delta.hour)}
          </td>
          <td title="Last one day" className={setBgColor(crypto.delta.day)}>
            {setChar(crypto.delta.day)}%{formatPercentage(crypto.delta.day)}
          </td>
          <td title="Last one week" className={setBgColor(crypto.delta.week)}>
            {setChar(crypto.delta.week)}%{formatPercentage(crypto.delta.week)}
          </td>
          <td title="Last one month" className={setBgColor(crypto.delta.month)}>
            {setChar(crypto.delta.month)}%{formatPercentage(crypto.delta.month)}
          </td>
          <td title="Last one year" className={setBgColor(crypto.delta.year)}>
            {setChar(crypto.delta.year)}%{formatPercentage(crypto.delta.year)}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default CryptoTableDatas;
