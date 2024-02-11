"use client"
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import NewsItem from '../widgets/newsItem'
import styles from './newsScroller.module.css'
import { allNewsArrow, linkOut, nextArrow, prevArrow } from '@/public/icons/icons'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
 

export default function NewsScroller() {
    const [widthItemNews, setWidthItemNews] = useState()
    const [widthViewportNews, setWidthViewportNews] = useState()
    const [widthScrollerNews, setWidthScrollerNews] = useState()
    const [translateXScroller, setTranslateXScroller] = useState(0)
    const [dataNews, setDataNews] = useState([])
    const [isShowPreloader, setIsShowPreloader] = useState(false)
    const refWidthViewportNews = useRef(null)
    const refWidthScrollerNews = useRef(null)
    const router = useRouter()

    const fetchNewsLimit4 =  `/api/v1/news?offset=0&limit=4`

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(fetchNewsLimit4)
            if (!res.ok) {
                throw new Error('Fail')
            }
            const data = await res.json()
            setDataNews(data.news)
        }
        getData()
    }, [])

    
    useLayoutEffect(() => {
        setWidthViewportNews(refWidthViewportNews.current.offsetWidth)
        setWidthScrollerNews(refWidthScrollerNews.current.offsetWidth)
    })

    const [indexCurrentNews, setIndexCurrentNews] = useState()

    const handlePrev = (index) => {
        if (translateXScroller < 0) {
            setTranslateXScroller(translateXScroller + widthItemNews + 30)
        }
    }

    const handleNext = (index) => {
        if ((-widthScrollerNews + widthViewportNews) < translateXScroller) {
            setTranslateXScroller(translateXScroller - widthItemNews - 30)
        }
    }

    const newsItems = dataNews.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)).map((e, i) => {
        return (
            <NewsItem 
                id={e._id}
                url={e.url}
                title={e.title}
                placeholder={e.placeholder}
                imgUrl={`/public/photo/${e.img}`}
                dateCreated={e.dateCreated}
                setWidthItemNews={setWidthItemNews}
            />
        )
    })

    const showLoader = () => {
        return (
            <div className='absolutPreloader'>
                <div className='containerPreloader'>
                    <div className='itemPreloader'>
                        <div className='preloader'></div>
                        <p className='preloaderText'>Подгружаем...</p>
                    </div>
                </div>
            </div>
        )
    }

    const handleClickShowAllNews = () => {
        setIsShowPreloader(true)
        router.push('/news')
    }

    return (
        <div className={styles.container} id='news'>
            <div className={styles.wrapper}>
                <div className={styles.itemController}>
                    <Link className={styles.titleSectionWrapper} href={'/news'}>
                        <h2 className={styles.itemController__title}>Новости</h2>
                        {linkOut()}
                    </Link>
                    <div className={styles.controls}>
                        <div className={styles.itemControllPrev}
                        onClick={() => handlePrev(indexCurrentNews - 1)}>
                            {prevArrow((-widthScrollerNews + widthViewportNews) < translateXScroller  ? "#CCCCCC" : '#5EBDB5')}
                        </div>
                        <div className={styles.itemControllNext}
                        onClick={() => handleNext(indexCurrentNews + 1)}>
                            {nextArrow((-widthScrollerNews + widthViewportNews) > translateXScroller  ? "#CCCCCC" : '#5EBDB5' )}
                        </div>
                    </div>
                </div>
                <div className={styles.itemScroller} 
                ref={refWidthViewportNews} 
                >
                    <div className={styles.leftLinerGradient}></div>
                    <div className={styles.scroller} 
                    ref={refWidthScrollerNews}
                    style={{transform: `translateX(${translateXScroller}px)`}}>
                        { newsItems }
                        <div className={styles.itemAllNews} 
                        onClick={() => handleClickShowAllNews()}
                        style={{width: widthItemNews}}>
                            <div className={styles.allNewsItemArrow}>
                                {allNewsArrow()}
                            </div>
                            <p className={styles.itemAllNews__about}>Все новости</p>
                        </div>
                    </div>
                    <div className={styles.rightLinerGradient}></div>
                </div>
            </div>
            {isShowPreloader && showLoader()}
        </div>
    )
}