import "@/styles/globals.css"
import Nav from "./Nav"
import { Courier_Prime } from 'next/font/google'
import QueryWrapper from './auth/QueryWrapper' 

const courier_prime = Courier_Prime({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={courier_prime.className}>
            <head />
            <body className="mx-4 md:mx-48 xl:mx-96 bg-gray-200">
                <QueryWrapper>
                    <Nav />
                    {children}
                </QueryWrapper>
            </body>
        </html>
    )
}