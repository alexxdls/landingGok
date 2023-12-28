import styles from './page.module.css'
import FirstSplash from './_home/firstSplash'
import AboutCompany from './_home/aboutCompany'
import NewsScroller from './_home/newsScroller'
import WhatProduce from './_home/whatProduce'
import Work from './_home/work'
import Vacancy from './_home/vacancy'
import Contacts from './_home/contacts'

export default function Home() {
  return (
      <main className={styles.main}>
        <FirstSplash /> 
        <AboutCompany />
        <WhatProduce />
        <NewsScroller />
        <Work />
        <Vacancy />
        <Contacts />
      </main>
  )
}
