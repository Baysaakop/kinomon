import "@/styles/globals.css"
import Nav from "./Nav"
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={roboto.className}>
            <head />
            <body className="mx-4 md:mx-48 xl:mx-96 bg-gray-200">
                <Nav />
                {children}
            </body>
        </html>
    )
}