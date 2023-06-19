import styles from './LoadingSkeleton.module.scss';

type LoadingSkeletonProps = {
  width: number;
  height: number;
};
const LoadingSkeleton = ({ width, height }: LoadingSkeletonProps) => {
  return <div className={styles.skeleton} style={{ width, height }}></div>;
};

export default LoadingSkeleton;
