'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Navbar2 from './components/Navbar2'
import { Provider } from 'react-redux'
import { store } from './globalstore/store'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
{/*         
              <Navbar/> */}
              <Provider store={store}>
                  <Navbar2/>
                  <Toaster/>
                  {children}
              </Provider>

           

      
        </body>
    </html>
  )
}
