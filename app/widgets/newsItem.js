import Image from 'next/image'
import styles from './newsItem.module.css' 
import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'

export default function NewsItem({
    id,
    url,
    title,
    placeholder,
    imgUrl, 
    dateCreated,
    setWidthItemNews
}) {

    const refWidthItemNews = useRef(null)
    useLayoutEffect(() => {
        setWidthItemNews(refWidthItemNews.current.offsetWidth)
    })

    const sliceLongString = (str) => {
        if (str.length > 300) {
            return `${str.slice(0, 300)} ...` 
        } else {
            return str
        }
    }

    const getDateToTimastamp = (dateCreated) => {
        const date = new Date(dateCreated)
        const month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октябрь", "Ноября", "Декабря"]
        return `${date.getDate()} ${month[date.getUTCMonth()]} ${date.getFullYear()}`
    }

    return (
        <Link href={`/news/${url}`} key={id} className={styles.container} ref={refWidthItemNews}>
            <div className={styles.wrapperImage}>
                <Image 
                    className={styles.img}
                    src={imgUrl}
                    width={380}
                    height={250}
                    alt={title}
                />
            </div>
            <div className={styles.payload}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.date}>{getDateToTimastamp(dateCreated)}</p>
                <h4 className={styles.placeholder}>{sliceLongString(placeholder)}</h4>
            </div>
            <div className={styles.blurBottom}></div>
        </Link>
    )
}