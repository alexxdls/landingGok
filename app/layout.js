import './globals.css'
import Footer from './widgets/footer'
import Header from './widgets/header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Дальнегорский ГОК',
  description: 'Градообразующий гигант севера Приморья',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <meta name="yandex-verification" content="74443c44e620a16f" />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
