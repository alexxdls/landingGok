'use client'

import styles from './contacts.module.css'
import { YMaps, Map  } from '@pbe/react-yandex-maps';


export default function Contacts() {
    return (
        <section className={styles.sevtion} id='contacts'>
            <div className={styles.container}>
                <h2 className={styles.title}>Контакты</h2>
                <div className={styles.content}>
                    <div className={styles.wrapperContentAbout}>
                        <div className={styles.contentAbout}>
                            <p className={styles.contentAbout__title}>Отдел кадров</p>
                            <p className={styles.contentAbout__about}>Телефон</p>
                            <a href='tel:+7(423)732-92-08' className={styles.contentAbout__contact}>+7(423)732-92-08</a>
                            <p className={styles.contentAbout__about}>E-mail</p>
                            <a href='mailto:kadrbor@mail.ru' className={styles.contentAbout__contact}>kadrbor@mail.ru</a>
                            <p className={styles.contentAbout__about}>Режим работы</p>
                            <p className={styles.contentAbout__contact}>ПН - ПТ с 9:00 до 15:00</p>
                        </div>
                    </div>
                    <div className={styles.contentMap}>
                    <YMaps>
                        <Map style={{ width: '100%', height: '100%' }} defaultState={{ center: [44.550454, 135.646780], zoom: 18 }} />
                    </YMaps>
                    </div>
                </div>
            </div>
        </section>
    )
}