import Icon from '../Icon/Icon';
import styles from './HomeCard.module.scss';

type Props = {
  iconName: string;
  title: string;
  text: string;
  className?: string;
};

const HomeCard = ({ iconName, title, text, className }: Props) => {
  return (
    <div className={`${styles['home-card']} ${className}`}>
      <div className="d-flex justify-content-center">
        <Icon name={iconName} size={64} color="white" />
      </div>
      <h3 className="mt-3 mb-4 text-xl fw-bold">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default HomeCard;
