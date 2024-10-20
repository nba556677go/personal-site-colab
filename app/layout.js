'use client'

import { Analytics } from '@vercel/analytics/react';
import './ui/global.css';
import { ThemeProvider } from 'next-themes'
import { Inconsolata } from 'next/font/google' 

import Link from './ui/Link'
import NavBar from './ui/NavBar'
import ThemeSwitch from './ui/ThemeSwitch'
import Footer from './ui/Footer'


const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
}) 

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <ThemeProvider attribute="class">
        <head>
          <link rel="SBU-vert_72icon" sizes="72x72" href="/static/favicons/SBU-vert_72icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </head>
        <body className="antialiased bg-white dark:bg-gray-700 transition-colors duration-1000">
          
          <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="flex h-screen flex-col justify-between">
              
              <header className="flex items-center justify-between py-10">
                <div className="flex items-center justify-between"> 
                  <div className="flex items-center justify-between">
                    <Link href='/' className={`hvr-bounce-to-top text-4xl font-extrabold text-gray-700 dark:text-gray-300 hover:text-white-900 dark:hover:text-gray-700 transition-colors duration-300 ${inconsolata.className}`}> ~/B.S. </Link> 
                  </div>
                </div>

                <div className="flex items-center text-base leading-5">
                  <NavBar/ > 
                  <ThemeSwitch />
                </div>
              </header>

              <main className="mb-auto">
                {children}
              </main>

              <Footer />
            </div>
          </div>
          <Analytics /> 
        </body>
      </ThemeProvider>
    </html>
  );
}
