import { FaAmazon, FaUniversity } from 'react-icons/fa'
import { SiGooglecloud, SiIntel } from 'react-icons/si'

const experiences = [
  {
    role: 'Software Engineer Intern',
    organization: 'Google Cloud',
    period: 'May 2026 - Aug. 2026',
    location: 'Kirkland, WA',
    Icon: SiGooglecloud,
    iconClassName: 'text-[#4285F4]',
  },
  {
    role: 'Applied Scientist Intern',
    organization: 'Amazon',
    period: 'May 2025 - Aug. 2025',
    location: 'Palo Alto, CA',
    Icon: FaAmazon,
    iconClassName: 'text-[#FF9900]',
  },
  {
    role: 'Research Assistant',
    organization: 'Stony Brook University',
    period: 'July 2023 - Present',
    location: 'Stony Brook, NY',
    Icon: FaUniversity,
    iconClassName: 'text-[#990000]',
  },
  {
    role: 'Technical Sales Intern',
    organization: 'Intel',
    period: 'Apr. 2021 - Apr. 2022',
    location: 'Taipei, Taiwan',
    Icon: SiIntel,
    iconClassName: 'text-[#0071C5]',
  },
]

export default function Experience() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="items-start space-y-8 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-700 dark:text-gray-300">
            Experience
          </h2>
        </div>

        <div className="pt-8 pb-2 xl:col-span-2">
          {experiences.map((experience, index) => {
            const Icon = experience.Icon

            return (
              <div
                key={`${experience.organization}-${experience.role}`}
                className="relative grid grid-cols-[2rem_1fr] gap-x-4 sm:grid-cols-[2.5rem_1fr] sm:gap-x-5"
              >
                <div className="relative flex justify-center" aria-hidden="true">
                  {index > 0 && (
                    <span className="absolute -top-4 bottom-1/2 w-px bg-primary-600 dark:bg-teal-500" />
                  )}
                  {index < experiences.length - 1 && (
                    <span className="absolute top-1/2 -bottom-4 w-px bg-primary-600 dark:bg-teal-500" />
                  )}
                  <span
                    className={`relative z-10 mt-8 h-4 w-4 rounded-full border-2 border-primary-600 dark:border-teal-500 ${
                      index === 0
                        ? 'bg-primary-600 dark:bg-teal-500'
                        : 'bg-white dark:bg-gray-700'
                    }`}
                  />
                </div>

                <article className="mb-8 rounded-md border border-gray-200 bg-white p-5 text-gray-700 shadow-md transition-colors duration-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
                  <h3 className="text-xl font-bold">{experience.role}</h3>
                  <div className="mt-2 flex items-center gap-3">
                    <Icon className={`h-7 w-7 shrink-0 ${experience.iconClassName}`} aria-hidden="true" />
                    <p className="text-lg font-semibold">{experience.organization}</p>
                  </div>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {experience.period}
                    <span className="mx-2" aria-hidden="true">·</span>
                    {experience.location}
                  </p>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
