import React, { FC } from 'react';
import styles from './loader.module.scss';

interface LoaderProps {
  isLoading?: boolean;
  targetRef?: React.Ref<HTMLDivElement>;
}

export const Loader: FC<LoaderProps> = ({ isLoading = false, targetRef }) => {
  return (
    <div className={styles.observerLoader}>
      <div ref={targetRef} aria-hidden="true" />

      {/*condition rendering*/}
      {isLoading && <div>Загрузка...</div>}
    </div>
  );
};
