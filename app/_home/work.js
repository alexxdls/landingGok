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
                            ООО «Дальнегорский ГОК» активно развивается и заинтересован в расширении штата сотрудников по различным специальностям. Мы готовы предложить соискателям расширенный комплекс социальных программ и гарантий, направленных на повышение уровня жизни сотрудников, карьерных и профессиональных возможностей, формирование безопасных и комфортных условий труда.
                        </p>
                        <p className={styles.proposal}>Преимущества работы в нашем горно-обогатительном комбинате:</p>
                        <div className={styles.proposalItems}>
                            <div className={styles.proposalItem}>
                                <p className={styles.proposalItem__name}>Интересная работа на уникальном предприятии.</p>
                            </div>
                            <div className={styles.proposalItem}>
                                <p className={styles.proposalItem__name}>Возможности карьерного роста внутри компании.</p>
                            </div>
                            <div className={styles.proposalItem}>
                                <p className={styles.proposalItem__name}>Получение новой специальности на базе учебного комбината предприятия.</p>
                            </div>
                            <div className={styles.proposalItem}>
                                <p className={styles.proposalItem__name}>Достойная заработная плата и возможность повлиять на свой доход.</p>
                            </div>
                            <div className={styles.proposalItem}>
                                <p className={styles.proposalItem__name}>Расширенный социальный пакет льгот и гарантий.</p>
                            </div>
                            <div className={styles.proposalItem}>
                                <p className={styles.proposalItem__name}>Дружный коллектив.</p>
                            </div>
                            <div className={styles.proposalItem}>
                                <p className={styles.proposalItem__name}>Насыщенная внутрикорпоративная жизнь.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <Image 
                        style={{'objectFit': 'cover',
                        'zIndex': '1', 
                        'borderRadius': '10px',
                        }}
                        src="/images/ИТ-отдел-отдел-кадров.jpg" 
                        alt="На фото сотрудники ИТ отдела (Кунцевич Артур, Руцкий Константин) и отдела кадров" 
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