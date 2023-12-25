import styles from './whatProduce.module.css'


export default function WhatProduce() {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Что производим</h2>
                <div className={styles.contents}>
                    <div className={`${styles.card} ${styles.cardBor}`}
                    style={{}}>
                        <p className={styles.cardTitle}>Борная кислота марки B</p>
                        <p>Паспорт безопасности: 
                            <a target='blank' href='./files/паспорт-безоп-бор-к-та-2020.pdf' className={styles.downloadPasport}> Сачать RU </a> 
                                /    
                            <a target='blank' href='./files/bor-certificat.pdf' className={styles.downloadPasport}> Download EN</a>
                        </p>
                    </div>
                    {/* <div className={`${styles.card} ${styles.cardDatalit}`}
                    style={{}}>
                        <p className={styles.cardTitle}>Датолитовый концентрат</p>
                    </div> */}
                    <div className={`${styles.card} ${styles.cardMore}`}
                    style={{}}>
                        <p className={styles.cardTitle}>Борный ангидрид</p>
                    </div>
                    {/* <div className={`${styles.card} ${styles.cardBorat}`}
                    style={{}}>
                        <p className={styles.cardTitle}>Датолитовый концентрат</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}