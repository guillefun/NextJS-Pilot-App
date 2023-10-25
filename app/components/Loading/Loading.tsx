import styles from './Loading.module.scss'

export default function LoadingSpinner() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
      </div>
    </div>
  );
}
