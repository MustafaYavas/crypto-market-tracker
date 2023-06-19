import { Spinner } from 'react-bootstrap';

type LoadingSpinnerProps = {
  height: number;
  variant?: string; // primary, secondary, success, danger, warning, info, light, dark
};

const LoadingSpinner = ({ height, variant }: LoadingSpinnerProps) => {
  return (
    <div
      style={{ height: `${height}px` }}
      className="d-flex justify-content-center align-items-center"
    >
      <Spinner
        animation="border"
        role="status"
        variant={variant ? variant : 'dark'}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoadingSpinner;
