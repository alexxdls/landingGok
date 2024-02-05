"use client"

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import NewsItem from '../widgets/newsItem'

export default function NewsPage() {
    const [widthItemNews, setWidthItemNews] = useState()
    const [dataNews, setDataNews] = useState([])

    const fetchNewsLimit = process.env.NEXT_PUBLIC_FETCH_NEWS_LIMIT || '/api/v1/news?offset=0&limit=20'

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(fetchNewsLimit)
            if (!res.ok) {
                throw new Error('Fail')
            }
            const data = await res.json()
            setDataNews(data.news)
        }
        getData()
    }, [])

    const newsItems = dataNews.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)).map((e, i) => {
        return (
            <NewsItem 
                id={e._id}
                title={e.title}
                url={e.url}
                placeholder={e.placeholder}
                imgUrl={`/images/uploads/${e.img}`}
                dateCreated={e.dateCreated}
                setWidthItemNews={setWidthItemNews}
            />
        )
    })

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.titlePage}>Новости</p>
                <div className={styles.newsItems}>
                    {newsItems}
                </div>
            </div>
        </div>
    )
}