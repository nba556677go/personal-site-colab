'use client'

import { useEffect, useState } from 'react'

const siteMetadata = {
  author: 'Bing Han', 
}

const getGreetingMessage = () => {
  const dayNameList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] 
  const timeList    = ['morning', 'afternoon', 'evening', 'night']

  const date = new Date() 
  const dayName = dayNameList[date.getDay()] 
  const hours = date.getHours() 
  let timeName = '' 

  if (0 < hours && hours < 11) {
    timeName = 'morning'
  } else if (11 < hours && hours < 17) {
    timeName = 'afternoon'
  } else if (17 < hours && hours < 20) {
    timeName = 'evening'
  } else {
    timeName = 'night'
  }

  return `Have a good ${dayName} ${timeName}!`
}


export default function Footer() {
  const [footerMessage, setFooterMessage] = useState('')

  useEffect(() => {
    setFooterMessage(`${siteMetadata.author} © ${new Date().getFullYear()} • ${getGreetingMessage()}`)
  }, [])

  return (
    <footer>
      <div className="mt-16 mb-8 flex flex-col items-center">
        <div className="mb-2 flex flex-col items-center text-sm text-gray-700 dark:text-gray-300 transition-all duration-700">
          <div>
            Special thanks to 
            <a href="https://calebwang.info/"> Caleb Jay Wang</a> for the awesome template.
            <br />
          </div>
          
          
          <div className="min-h-5">{footerMessage}</div>
        </div>
      </div>
    </footer>
  )
}
