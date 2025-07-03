import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['700', '600'],
})

export const metadata: Metadata = {
    title: 'Psychopath Maps',
}

const RootLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <html lang="en">
            <body
                className={`bg-[#330000] ${geistSans.variable} ${geistMono.variable} ${poppins.className}  antialiased `}
            >
                {children}
            </body>
        </html>
    )
}

export default RootLayout
