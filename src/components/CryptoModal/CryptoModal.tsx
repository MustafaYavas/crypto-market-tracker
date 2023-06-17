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
import { formatPrice } from '../../helpers/formats';
import styles from './CryptoModal.module.scss';
import Icon from '../Icon/Icon';

type CryptoModalProps = {
  isOpen: boolean;
  modalData: SingleCryptoHistoryDatas[];
  cryptoName: string;
};

const CryptoModal = ({ isOpen, modalData, cryptoName }: CryptoModalProps) => {
  const dispatch = useAppDispatch();

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
          <span className={styles.title}>{cryptoName} Market Datas </span>
          <span className={styles['title-info']}>
            (<span>{modalFormattedDatas[0]?.name} - </span>
            <span>
              {modalFormattedDatas[modalFormattedDatas?.length - 1]?.name}
            </span>
            )
          </span>
        </Modal.Title>
        <span role="button" onClick={() => dispatch(toogleModal(false))}>
          <Icon name="AiOutlineClose" size={28} />
        </span>
      </Modal.Header>
      <Modal.Body style={{ width: '100%', height: '500px' }}>
        {modalFormattedDatas.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
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
  };
};

export default connect(mapStateToProps)(CryptoModal);
