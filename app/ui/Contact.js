import { MdEmail } from 'react-icons/md'

export default function Contact() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="items-start space-y-8 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-700 dark:text-gray-300">
            Contact
          </h2>
        </div>

        <div className="pt-8 pb-2 xl:col-span-2">
          <a
            href="mailto:bingshiunhan@gmail.com"
            className="inline-flex items-center gap-3 text-lg font-semibold text-primary-600 transition-colors duration-300 hover:text-orange-500 dark:text-teal-500 dark:hover:text-orange-500"
          >
            <MdEmail className="h-6 w-6" aria-hidden="true" />
            bingshiunhan@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
