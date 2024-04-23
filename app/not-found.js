import styles from './not-found.module.css'

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.itemAbout}>
                    <p className={styles.errorCode}>404</p>
                    <p className={styles.titlePage}>Такой страницы нет</p>
                </div>
            </div>
        </div>
    )
  }