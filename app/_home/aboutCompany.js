import Image from 'next/image'
import styles from './aboutCompany.module.css'

export default function AboutCompany() {

    return (
        <div className={styles.container} id='about'>
            <div className={styles.wrapper}>
                <p className={styles.title}>О предприятии</p>
                <div className={styles.content}>
                    <div className={styles.about}>
                        <p className={styles.hotAbout}>
                            Год основания
                            <span className={styles.hotAbout__info}> - 1958</span>
                        </p>
                        
                        <p className={styles.hotAbout}>
                            Штат сотрудников
                            <span className={styles.hotAbout__info}> - 2000+</span>
                        </p>
                        {/* <p className={styles.hotAbout}>
                            Генеральный директор
                            <span className={styles.hotAbout__info}> - Бормашенко Андрей Владимирович</span>
                        </p> */}
                        <h2 className={styles.mainAbout}>
                            «Дальнегорский ГОК» – один из крупнейших в мире производителей боросодержащей продукции такой как борная кислота, борная кислота марки А, датолитовый концентрат, борат кальция и другие.
                            Основными видами деятельности предприятия являются добыча, обогащение и переработка полезных ископаемых, производство, маркетинг и реализация борсодержащих продуктов.
                            Производственные подразделения завода расположены в городе Дальнегорске Приморского края.
                            Помимо основных видов деятельности ООО «Дальнегорский ГОК» оказывает услуги в сфере теплоснабжения.                                                                                                                                 
                        </h2>
                    </div>
                    <div className={styles.conteinerImage}>
                        <Image 
                            src='/images/about.jpg'
                            fill={true}
                            sizes='100vw' 
                            style={{position: 'absolute', 
                                'objectFit': 'cover',
                                'borderRadius': '10px'    
                            }}
                            alt='Дальнегорский ГОК'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}