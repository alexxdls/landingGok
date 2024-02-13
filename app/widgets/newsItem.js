import Image from 'next/image'
import styles from './newsItem.module.css' 
import { useLayoutEffect, useRef, useState } from 'react'
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

    const [isShowMore, setIsShowMore] = useState(false)

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
        <Link href={`/news/${url}`} key={id} 
        className={styles.container} ref={refWidthItemNews} 
        onMouseOver={(e) => setIsShowMore(true)}
        onMouseOut={() => setIsShowMore(false)}
        // onTouchMove={(e) => setIsShowMore(true)}
        // onTouchEnd={() => setIsShowMore(false)}
        >
            <div className={`${styles.wrapperImage}`}>
                {/* {isShowMore && <div className={styles.imgMore}></div>} */}
                <img 
                    className={`${styles.img} ${isShowMore && styles.imgMore}`}
                    src={imgUrl}
                    width={380}
                    height={250}
                    alt={title}
                />
            </div>
            <div className={`${styles.payload} ${isShowMore && styles.payloadMore}`}>
                <h3 className={styles.title}>{title}</h3>
                <p className={`${styles.date} ${isShowMore && styles.dateMore}`}>{getDateToTimastamp(dateCreated)}</p>
                <h4 className={`${styles.placeholder} ${isShowMore && styles.placeholderMore}`}>{isShowMore ? placeholder : sliceLongString(placeholder)}</h4>
            </div>
            <div className={styles.blurBottom}></div>
        </Link>
    )
}