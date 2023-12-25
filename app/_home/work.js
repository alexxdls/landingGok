import styles from './work.module.css'
import Image from 'next/image'

export default function Work() {

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Преимущества работы</h2>
                <div className={styles.container}>
                    <div className={styles.contentContainer}>
                        <p className={styles.about}>
                            Дальнегоский ГОК активно развивается и заинтересована в расширении штата сотрудников по различным специальностям. В компании реализуется комплекс корпоративных программ, направленных на повышение уровня социальной защищенности сотрудников, создание безопасных условий труда, профессиональное развитие и карьерный рост.
                        </p>
                        <p className={styles.proposal}>Мы предлагаем нашим сотрудникам:</p>
                        <div className={styles.proposalItems}>
                            <div className={styles.proposalItem}>
                                <p className={styles.proposalItem__name}>Конкурентную заработную плату</p>
                            </div>
                            <div className={styles.proposalItem}>
                                <p className={styles.proposalItem__name}>Безопасные условия труда</p>
                            </div>
                            <div className={styles.proposalItem}>
                                <p className={styles.proposalItem__name}>Расширенную программу социальных гарантий</p>
                            </div>
                            <div className={styles.proposalItem}>
                                <p className={styles.proposalItem__name}>Возможности карьерного роста внутри предприятия</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <Image 
                        style={{'objectFit': 'cover',
                        'zIndex': '1', 
                        'borderRadius': '20px',
                        }}
                        src="/images/photo1701912474.jpeg" 
                        alt="На фото сотрудники ИТ отдела и отдела кадров" 
                        // width={100}
                        // height={100}
                        fill={true}
                        sizes='100vw'
                        />
                    </div> 
                </div>
            </div>
            <div id='vacancy'></div>
        </section>
    )
}