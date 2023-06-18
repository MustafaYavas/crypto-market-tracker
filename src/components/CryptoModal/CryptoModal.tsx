import { Modal } from 'react-bootstrap';
import { RootState } from '../../store/configureStore';
import { connect } from 'react-redux';
import { useAppDispatch } from '../../App';
import { toogleModal } from '../../store/slices/Modal';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { getDateFromMs } from '../../helpers/date';
import { formatCap, formatPrice } from '../../helpers/formats';
import styles from './CryptoModal.module.scss';
import Icon from '../Icon/Icon';

type CryptoModalProps = {
  isOpen: boolean;
  modalData: SingleCryptoHistoryDatas[];
  cryptoName: string;
  cryptos: CryptoCurrency[];
};

const CryptoModal = ({
  isOpen,
  modalData,
  cryptoName,
  cryptos,
}: CryptoModalProps) => {
  const dispatch = useAppDispatch();

  const cryptoInfos = cryptos.find((c) => {
    if (c.code === cryptoName) return c;
  });

  let modalFormattedDatas = [];
  modalFormattedDatas = modalData?.map((data) => {
    return {
      name: getDateFromMs(data.date),
      pv: data.rate,
      amt: formatPrice(data.rate),
    };
  });

  return (
    <Modal
      size="xl"
      centered
      show={isOpen}
      style={{ backgroundColor: 'transparent' }}
      onHide={() => dispatch(toogleModal(false))}
      className={styles.modal}
    >
      <Modal.Header className="d-flex justify-content-between align-items-center">
        <Modal.Title className="d-flex justify-content-center align-items-center">
          <div className="d-none d-md-flex justify-content-center align-items-center">
            <span
              className={styles.title}
              role="button"
              onClick={() => window.open(cryptoInfos?.links.website)}
            >
              <img
                width={20}
                height={20}
                src={cryptoInfos?.png32}
                alt="crypto-img"
              />
              {cryptoInfos?.name}
            </span>
            <span className={styles['title-info']}>
              (<span>{modalFormattedDatas[0]?.name}</span>
              <span className="mx-1">—</span>
              <span>
                {modalFormattedDatas[modalFormattedDatas?.length - 1]?.name}
              </span>
              )
            </span>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-start d-md-none">
            <span
              className={styles.title}
              role="button"
              onClick={() => window.open(cryptoInfos?.links.website)}
            >
              <img
                width={20}
                height={20}
                src={cryptoInfos?.png32}
                alt="crypto-img"
              />
              {cryptoInfos?.name}
            </span>
            <span className={styles['title-info']}>
              (<span>{modalFormattedDatas[0]?.name}</span>
              <span className="mx-1">—</span>
              <span>
                {modalFormattedDatas[modalFormattedDatas?.length - 1]?.name}
              </span>
              )
            </span>
          </div>
        </Modal.Title>
        <span role="button" onClick={() => dispatch(toogleModal(false))}>
          <Icon name="AiOutlineClose" size={28} />
        </span>
      </Modal.Header>
      <Modal.Body style={{ width: '100%', height: '500px' }}>
        <div className={styles['crypto-sub-info']}>
          <div className="d-flex flex-column justify-content-between align-items-center">
            <span className={styles['crypto-sub-info-title']}>Market Cap</span>
            <span className={styles['crypto-sub-info-text']}>
              {formatCap(cryptoInfos?.cap!)}
            </span>
          </div>

          <div className="d-flex">
            <div className="d-flex flex-column justify-content-between align-items-center mx-2 mx-md-5">
              <span className={styles['crypto-sub-info-title']}>
                Current Value
              </span>
              <span className={styles['crypto-sub-info-text']}>
                {formatCap(cryptoInfos?.rate!)}
              </span>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-center">
              <span className={styles['crypto-sub-info-title']}>
                Highest Value
              </span>
              <span className={styles['crypto-sub-info-text']}>
                {formatCap(cryptoInfos?.allTimeHighUSD!)}
              </span>
            </div>
          </div>
        </div>
        {modalFormattedDatas.length > 0 && (
          <ResponsiveContainer width="100%" height="90%">
            <LineChart
              data={modalFormattedDatas}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" hide />
              <YAxis width={40} hide />
              <Tooltip />
              <Legend />
              <Line
                name={cryptoName}
                type="monotone"
                dataKey="pv"
                stroke="blue"
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isOpen: state.modal.isOpen,
    modalData: state.modal.modalData,
    cryptoName: state.modal.cryptoName,
    cryptos: state.cryptos.cryptos,
  };
};

export default connect(mapStateToProps)(CryptoModal);
