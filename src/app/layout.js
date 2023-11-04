import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <Head>
     <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
     </Head>
      
      <body className={inter.className}>
        
        {children}
      
      </body>
    </html>
  )
}
