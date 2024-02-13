'use client'
import React from "react";
import styles from './page.module.css' 
import useSWR from 'swr'
import Image from 'next/image'
import Link from "next/link";
import Loading from "../loading";



export default function News({params} = props) {

    const fetchNewsCurrent = `/api/v1/news/`

    
    const fetcher = (...args) => fetch(...args).then(res =>  res.json())

    const { data, error, isLoading } = useSWR(`${fetchNewsCurrent}${params.url}`, fetcher) 
    
    const getDateToTimastamp = (dateCreated) => {
        const date = new Date(dateCreated)
        const month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октябрь", "Ноября", "Декабря"]
        return `${date.getDate()} ${month[date.getUTCMonth()]} ${date.getFullYear()}`
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapperPathLink}>
                <Link className={styles.pathLink} href={'/'}>Главная</Link>
                <p>/</p>
                <Link className={styles.pathLink} href={'/news'}>Новости</Link>
            </div>
            <div className={styles.wrapper}>
                <img
                    className={styles.image}
                    src={`/public/photo/${data.imgUrl}`}
                    alt={data.title}
                    width={500}
                    height={500}
                />
            </div>
            <div className={styles.wrapperContent}>
                <div className={styles.content}> 
                    <p className={styles.title}>{data.title}</p>
                    <p className={styles.date}>{getDateToTimastamp(data.dateCreated)}</p>
                    <p className={styles.placeholder}>{data.placeholder}</p>
                </div>
            </div>
        </div>
    )
}