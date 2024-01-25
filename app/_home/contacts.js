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
                            <div className={styles.contentAboutItem}>
                                <p className={styles.contentAbout__about}>Телефон</p>
                                <a href='tel:+7(423)733-44-95' className={styles.contentAbout__contact}>+7(423)733-44-95</a>
                                <p className={styles.contentAbout__about}>Начальник отдела кадров</p>
                                <a href='tel:+7(423)733-43-24' className={styles.contentAbout__contact}>+7(423)733-43-24</a>
                                <p className={styles.contentAbout__about}>E-mail</p>
                                <a href='mailto:kadrbor@mail.ru' className={styles.contentAbout__contact}>kadrbor@mail.ru</a>
                                <p className={styles.contentAbout__about}>Режим работы</p>
                                <p className={styles.contentAbout__contact}>ПН - ПТ с 8:00 до 17:00</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wrapperContentAbout}>
                        <div className={styles.contentAbout}>
                            <p className={styles.contentAbout__title}>Приёмная</p>
                            <div className={styles.contentAboutItem}>
                                <p className={styles.contentAbout__about}>Телефон</p>
                                <a href='tel:+7(423)733-62-22' className={styles.contentAbout__contact}>+7(423)733-62-22</a>
                                <p className={styles.contentAbout__about}>E-mail - канцелярия</p>
                                <a href='mailto:mail@b-acid.ru' className={styles.contentAbout__contact}>mail@b-acid.ru</a>
                            </div>
                   
                            <p className={styles.contentAbout__title}>Пресс-служба</p>
                            <div className={styles.contentAboutItem}>
                                <p className={styles.contentAbout__about}>Телефон</p>
                                <a href='tel:+7(964)439-08-88' className={styles.contentAbout__contact}>+7(964)439-08-88</a>
                                <p className={styles.contentAbout__about}>E-mail - канцелярия</p>
                                <a href='mailto:kratanchuk@gmail.com' className={styles.contentAbout__contact}>kratanchuk@gmail.com</a>
                            </div>
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