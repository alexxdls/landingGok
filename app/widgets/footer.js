import styles from './footer.module.css'
import Link from 'next/link';
import Image from 'next/image'

export default function Footer() {
    
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.itemAbout}>
                    <p className={styles.aboutCompany}>ООО "Дальнегорский ГОК"</p>
                    <Link href="/">
                        <Image 
                        src="/Logo.svg" 
                        alt="" 
                        width={75}
                        height={52}
                        />
                    </Link>
                </div>
                <div className={styles.itemNav}>
                    <nav className={styles.nav}>
                        <Link href="#about" className={styles.itemNav}>О преприятии</Link>
                        <Link href="#vacancy" className={styles.itemNav}>Вакансии</Link>
                        <Link href="#news" className={styles.itemNav}>Новости</Link>
                        <Link href="#contacts" className={styles.itemNav}>Контакты</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}