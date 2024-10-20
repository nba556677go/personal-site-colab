'use client'

import News from '@/app/ui/News'
import Link from '@/app/ui/Link'
import NextImage from 'next/image'
import { IconContext } from "react-icons"
import { MdEmail } from 'react-icons/md'
import { FaInstagram, FaLinkedin} from 'react-icons/fa'
import { TbBrandGithubFilled } from 'react-icons/tb' 

import { Courgette } from 'next/font/google'

const courgette = Courgette({
  subsets: ['latin'],
  weight: "400"
})

const name = 'Bing-Shiun (Bing) Han'
const occupation = 'CS Ph.D.' 
const company = 'Stony Brook University' 

export default function Page() {
    return (
      <div className="divide-y divide-gray-200 dark:divide-gray-700">

        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">

          <div className="flex flex-col items-center pt-8">
            <NextImage
                className="h-64 w-64"
                src={"/static/images/headshot.jpg"}
                width={256}
                height={256}
              />
            <div className="flex flex-col items-center">
              <h3 className={`pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight text-gray-700 dark:text-gray-300 ${courgette.className}`}>{name}</h3>
              <div className="text-gray-700 dark:text-gray-300">{occupation} @ {company}</div>
              
              <div className="flex flex-row space-x-3 pt-6">
                <IconContext.Provider value={{ className: "social-icon" }}> 
                  <div>
                    <a href="mailto:bihhan@cs.stonybrook.edu" target="_blank"> <MdEmail /> </a>
                  </div>
                  <div>
                    <a href="https://github.com/nba556677" rel="noopener noreferrer" target="_blank"> <TbBrandGithubFilled /> </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/bing-shiun-han/" rel="noopener noreferrer" target="_blank"> <FaLinkedin /> </a>
                  </div>
                  
                </IconContext.Provider>
              </div>
            </div>
          </div>

          <div className="prose max-w-none pt-8 pb-2 dark:prose-dark xl:col-span-2">
            <h2 className="text-left text-2xl mb-4 font-bold text-gray-700 transition-colors duration-700 dark:text-gray-300">
              About me 
            </h2>
            <div className="mb-8 text-lg text-gray-700 transition-colors duration-700 dark:text-gray-300">
              <p className="mb-4 p">Hi there, welcome to my personal webpage.</p>
              <p className="mb-4 p">My name is Bing Han, and I am a Ph.D. candidate in Computer Science at 
                <Link href="https://www.stonybrook.edu/"> Stony Brook University</Link>, where I work under the guidance of Dr. <Link href="https://www3.cs.stonybrook.edu/~anshul/"> Anshul Gandhi</Link> and Dr. <Link href="https://www.cs.stonybrook.edu/people/faculty/ZhenhuaLiu"> Zhenhua Liu</Link>.
                I received my Bachelor's degree in Electrical Engineering from <Link href="https://www.ntu.edu.tw/english/"> National Taiwan University</Link>, and have industry experience from my internships at Intel and Cathay Financial Holdings.
              </p>
              <p className="mb-4 p">My research interests lie in GPU performance optimization and machine learning systems. Currently, my work focuses on improving GPU job sharing efficiency and optimizing the Kubernetes scheduler framework for machine learning tasks. I developed predictive models and optimization techniques based on GPU kernel profiles and spatial sharing mechanisms, achieving significant performance improvements.
              </p>
              <p className="mb-4 p">Outside of my research, I enjoy participating in machine learning competitions, where I achieved first place in the AICUP Chinese Medical Dialogue Analysis Competition. In my free time, you can find me tinkering with web development projects, brewing espresso, or immersing myself in <Link href="https://www.youtube.com/watch?v=KBbZNMYVIL0?si=ItX2DTpUf9Rqttcg"> music</Link>.
              </p>
          </div>

            { /* {children} */}
            <News />
          </div>
    
        </div>

      </div>
    )
  }