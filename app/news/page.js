"use client"

import React, { Suspense, useEffect, useState } from 'react'
import styles from './page.module.css'
import NewsItem from '../widgets/newsItem'
import Loading from './loading'

export default function NewsPage() {
    const [widthItemNews, setWidthItemNews] = useState()
    const [dataNews, setDataNews] = useState([])
    const [resNewsMeta, setResNewsMeta] = useState({})

    const fetchNewsLimit = '/api/v1/news?offset=0&limit=90'

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(fetchNewsLimit)
            if (!res.ok) {
                throw new Error('Fail')
            }
            const data = await res.json()
            setDataNews(data.news)
            setResNewsMeta(data.meta)
        }
        getData()
    }, [])

    // console.log(resNewsMeta);

    const newsItems = dataNews.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)).map((e, i) => {
        return (
            <NewsItem 
                id={e._id}
                title={e.title}
                url={e.url}
                placeholder={e.placeholder}
                imgUrl={`/public/photo/${e.img}`}
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
                    <Suspense fallback={<Loading />}>
                        {newsItems}
                    </Suspense>
                </div>
            </div>
        </div>
    )
}