import { useState } from 'react'
import styles from './vacancyItem.module.css'
import useSWR from 'swr'
import { showMoreVacancyIco } from '@/public/icons/icons'


export default function VacancyItem({
    id, 
    name, 
    salary_min, 
    salary_max,
    duty,
    requirement,
    contact_list,
    employment,
    schedule, 
    vac_url,
    }) {

    const [isShowDetail, setIsShowDetail] = useState(false)
    const [isShowHover, setIsShowHover] = useState(false)


    const separatorSalary = (salary) => {
        return Intl.NumberFormat().format(salary)
    }

    const detail = (id) => {
        return (
            <div className={styles.detail} key={`${id}${name}`}>
                <p className={styles.detail__title}>Должностные обязанности</p>
                <p className={styles.detail__about}>{duty.replace(/[<p></p>]/g, '')}</p>
                <p className={styles.detail__title}>Требования к кандидату</p>
                <p className={styles.detail__about}>Образование: {requirement.education}</p>
                <p className={styles.detail__about}>Опыт работы: {
                    requirement.experience == 0 
                    ? 'Без опыта' : 
                    `${requirement.experience} ${requirement.experience == 1 
                        ? 'год' 
                        : requirement.experience > 4 
                        ? 'лет' 
                        : 'года'}`}
                </p>
                <p className={styles.detail__title}>Данные по вакансии</p>
                <p className={styles.detail__about}>Занятость: {employment}</p>
                <p className={styles.detail__about}>График работы: {schedule}</p>
                <p className={styles.detail__title}>Контакты:</p>
                <p className={styles.detail__about}>{contact_list[0].contact_type}: {contact_list[0].contact_type == 'Телефон' ? `+7${contact_list[0].contact_value}` : contact_list[0].contact_value}</p>
                <p className={styles.detail__about}>{contact_list[1].contact_type}: {contact_list[1].contact_value}</p>
                <div className={styles.itemMoreDetail}>
                    <a href={vac_url} target='blank' className={styles.moreDetail}>
                        <p>Подробнее</p>
                        <img className={styles.linkOutIco} src='./icons/link-out.svg'/>
                    </a>
                </div>
            </div>
        )
    }

    return (
        <div key={id} className={styles.containerVacancyItem} 
        onMouseEnter={() => setIsShowHover(true)}
        onMouseOut={() => setIsShowHover(false)}>
            <div className={styles.vacancyItem} onClick={() => setIsShowDetail(!isShowDetail)}>
                <div className={styles.vacancyItemContent}>
                    <p className={styles.vacancyItemContent__title}>{`${name[0].toUpperCase()}${name.substring(1, name.length)}`}</p>
                    {salary_max == 0 ? 
                        <p className={styles.vacancyItemContent__solary}>Заработная плата: от {separatorSalary(salary_min)}</p>
                        :
                        <p className={styles.vacancyItemContent__solary}>Заработная плата: {separatorSalary(salary_min)} - {separatorSalary(salary_max)}</p>
                    }
                </div>
                <div className={styles.vacancyItemControl}>
                    <div className={styles.imgShowDetailVacancy} 
                    style={{
                        transform: `rotate(${isShowDetail ? '180deg' : '0deg'})`
                    }}>
                        { showMoreVacancyIco(isShowDetail ? '#065D61' : isShowHover ? '#8ACDC5' : '#D8D8D8') }
                    </div>
                </div>
            </div>
            {isShowDetail && detail(id)}
        </div>
    )
}