'use client'
import Image from 'next/image'
import styles from './firstSplash.module.css' 
import { useEffect, useRef, useState } from 'react';

export default function FirstSplash() {
    const [opacity, setOpacity] = useState(.0)
    const [scale, setScale] = useState(1)
    let windowSize = 0;
    let directionScroll = ''

    const controlDirection = () => {
        setOpacity(window.scrollY / (windowSize / 1.2))
        setScale(Math.min(Math.max(window.scrollY / (windowSize /2 ), 1), 1.2))
        directionScroll = window.scrollY;
    }

    useEffect(() => { 
        windowSize = window.innerHeight;
        directionScroll  = window.scrollY
        window.addEventListener('scroll', controlDirection);
        return () => {
            window.removeEventListener('scroll', controlDirection);
        };
    },[]);

    return (
        <div className={styles.bg}>
            <Image 
            style={{
                'objectFit': 'cover', 
                'zIndex': '-1',
                transform: `scale(${scale})`,
                transition: '1s'
            }}
            src="/GOK-HEADER.jpg" 
            alt="Дальнегорский ГОК карьер" 
            fill={true}
            sizes='100vw'
            />
            <div className={styles.itemAbout}>
                <h1 className={styles.about} style={{transition: '1s'}}>
                    Дальнегорский
                    <br/> <span style={{'color': '#5EBDB5'}}>горно-обогатительный</span>
                    <br/> комбинат
                </h1>
                {/* <div>
                    <button className={styles.btnVacancy} onClick={console.log('Click!')}>
                    О предприятии
                    </button>
                </div> */}
                <div className={styles.smollInfo}>
                    <div className={styles.itemSmollInfo}>
                        <p className={styles.itemSmollInfo__info}>Работаем с</p>
                        <p className={styles.itemSmollInfo__placeholder}>1959 года</p>
                    </div>
                    <div className={styles.itemSmollInfoTwo}>
                        <p className={styles.itemSmollInfo__info}>Занимаем</p>
                        <p className={styles.itemSmollInfo__placeholder}>1/3 мировых поставок</p>
                    </div>
                </div>
            </div>
            <div style={{
                height: '100vh',
                background: `rgba(255, 255, 255, ${opacity})`,
                width: '100vw',
                position: 'absolute',
                top: 0,
                transition: '.5s'
            }}></div>
        </div>
    )
}