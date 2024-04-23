import styles from './documents.module.css'
import Image from "next/image";

export default function documents() {

    return (
        <div className={styles.container} id='documents'>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Документы</h2>
                <div className={styles.contents}>
                    <h4>ПРИКАЗ №1300</h4>
                    <p>18 апреля 2024 г.</p>
                    <p>Об утврждении перечня товаров, работ, услуг, закупки которых осуществляются у субъектов малого и
                        среднего предпринимательства</p>
                    <p><a target='blank' href='./files/prikaz-1300-18.04.2024.pdf'><img src="./icons/pdfIcon.png" alt=""/></a></p>
                </div>
            </div>
        </div>
    )
}