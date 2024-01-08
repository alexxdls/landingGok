'use client'

import useSWR from 'swr'
import { useEffect, useState } from 'react'
import styles from './vacancy.module.css'
import VacancyItem from './vacancyItem'
import { useRouter } from 'next/navigation'
import { showAllVacancy } from '@/public/icons/icons'


export default function Vacancy() {
    const [isLimitVacancy, setIsLimitVacancy] = useState(true)
    
    const router = useRouter()

    const fetcher = (...args) => fetch(...args).then(res =>  res.json())

    const { data, error, isLoading } = useSWR(isLimitVacancy ? `http://opendata.trudvsem.ru/api/v1/vacancies/company/5137746121981?offset=1&limit=6` : `http://opendata.trudvsem.ru/api/v1/vacancies/company/5137746121981`, fetcher)
    
    if (isLoading) {
        return (
            <div className='containerPreloader'>
                <div className='itemPreloader'>
                    <div className='preloader'></div>
                    <p className='preloaderText'>Подгружаем...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return <div></div>
    }

    

    const itemsVacancy = data.results.vacancies.map((e, i) => {
        return <VacancyItem 
            id={i} 
            name = {e.vacancy['job-name']}  
            salary_min = {e.vacancy['salary_min']}
            salary_max = {e.vacancy['salary_max']}
            duty = {e.vacancy['duty']}
            requirement = {e.vacancy['requirement']}
            contact_list = {e.vacancy['contact_list']}
            employment = {e.vacancy['employment']}
            schedule = {e.vacancy['schedule']}
            vac_url = {e.vacancy['vac_url']}
            /> 
    })

    const handleClickShowAll = () => {
        router.push('#vacancy')
        setIsLimitVacancy(!isLimitVacancy)
    }
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Вакансии</h2>
                {/* <img className={styles.linkOutIco} src='./icons/link-out.svg'/> */}
                <div className={styles.vacancy}>
                    { itemsVacancy }
                </div>
                {/* { data.meta.limit < 100 ? */}
                    <div className={styles.wrapperShowAll}>
                        <div className={styles.showAll} onClick={() => handleClickShowAll()}>
                            <p className={styles.showAll__title}>{isLimitVacancy ? 'Показать все' : 'Скрыть'}</p>
                            <div style={{transform: `rotate(${isLimitVacancy ? '0deg' : '180deg'})`}}>
                                { showAllVacancy()  }
                            </div>
                        </div>
                    </div>
                    {/* :
                    <div></div>
                } */}
            </div>
        </section>
    )
}