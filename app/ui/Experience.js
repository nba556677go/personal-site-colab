const experiences = [
  {
    role: 'Software Engineer Intern',
    organization: 'Google Cloud',
    period: 'May 2026 - Aug. 2026',
    location: 'Kirkland, WA',
  },
  {
    role: 'Applied Scientist Intern',
    organization: 'Amazon',
    period: 'May 2025 - Aug. 2025',
    location: 'Palo Alto, CA',
  },
  {
    role: 'Research Assistant',
    organization: 'Stony Brook University',
    period: 'July 2023 - Present',
    location: 'Stony Brook, NY',
  },
  {
    role: 'Technical Sales Intern',
    organization: 'Intel',
    period: 'Apr. 2021 - Apr. 2022',
    location: 'Taipei, Taiwan',
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

        <div className="space-y-8 pt-8 pb-2 xl:col-span-2">
          {experiences.map((experience) => (
            <article key={`${experience.organization}-${experience.role}`} className="text-gray-700 dark:text-gray-300">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start sm:gap-6">
                <div>
                  <h3 className="text-xl font-bold">{experience.role}</h3>
                  <p className="text-lg font-semibold text-primary-600 dark:text-teal-500">
                    {experience.organization}
                  </p>
                </div>
                <div className="shrink-0 text-left sm:text-right">
                  <p className="font-semibold">{experience.period}</p>
                  <p className="text-gray-500 dark:text-gray-400">{experience.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
