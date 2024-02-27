'use client'
import { useEffect, useState } from 'react';
import './header.css'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image'

export default function Header() {
    const [scrollY, setScrollY] = useState()
    const pathname = usePathname()
    let hashName = 'window.location.hash'
    // Реализовать детектор якорей
    let windowSize = 0;
    function logit() {
        setScrollY(window.scrollY);
    }
    
    useEffect(() => {
        windowSize = window.innerWidth;
        window.addEventListener("scroll", logit);
        return () => {
            window.removeEventListener("scroll", logit);
        }
    }, [])
    
    return (
        <header className={
            `itemHeader ${ scrollY > 10 && pathname == '/' && 'animationStart'} 
            ${scrollY < 10 && pathname == '/' && 'animationEnd'}`}
            style={pathname !== '/' ? {
                background: '#fff', color: '#000'} : {zIndex: 1001}}>
            <div className="max-width-1440 header-content">
                <Link href="/">
                    <div className="item-name">
                        <Image 
                        src="/Logo.svg" 
                        alt="" 
                        width={windowSize < 400 ? 75 / 1.4 : 75}
                        height={52}
                        />
                        <p className="item-name__name">Дальнегорский ГОК</p>
                    </div>
                </Link>
                <nav className="header-nav">
                    <Link href="/#about" className={hashName == '#about' ? 'header-nav__name header-nav__active-link' : 'header-nav__name'}>
                        О предприятии
                    </Link>
                    <Link href="/#news" className={hashName == '#news' ? 'header-nav__name header-nav__active-link' : 'header-nav__name'}>
                        Новости
                    </Link>
                    <Link href="/#vacancy" className={hashName == '#vacancy' ? 'header-nav__name header-nav__active-link' : 'header-nav__name'}>
                        Вакансии
                    </Link>
                    <Link href="/#contacts" className={hashName == '#contacts' ? 'header-nav__name header-nav__active-link' : 'header-nav__name'}>
                        Контакты
                    </Link>
                </nav>
                
            </div>
        </header>
    )
}