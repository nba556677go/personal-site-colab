import Link from './Link'

export default function News() {
  return (
    <div className="text-gray-700 transition-colors duration-700 dark:text-gray-300">
      <h2 className="text-left text-2xl mb-4 font-bold text-gray-700 transition-colors duration-700 dark:text-gray-300">
        Recent news
      </h2>
      
      <div className="ml-4 grid auto-rows-fr text-lg">

        <div className="mt-2 mb-2 flex flex-row gap-4">
            <div className="... basis-1/4 font-bold"> May. 2025 </div>
            <div className="... basis-3/4 text-left align-middle">
              {' '}
              Started my Applied Scientist internship at Amazon Search!
            </div>
        </div>

        <div className="h-fill mt-2 mb-2 flex flex-row gap-4">
          <div className="... basis-1/4 font-bold"> Apr. 2025 </div>
          <div className="... basis-3/4 text-left align-middle">
            {' '}
            Our work on optimizing GPU SM allocation is appearing in{' '}
            {<Link href="https://www.sigmetrics.org/sigmetrics2025/index.html">AICrossroads Workshop at SIGMETRICS'25</Link>}! {' '}
            <Link 
              href="/publications" 
              className="font-bold text-gray-700 dark:text-gray-300 hvr-underline-from-center">
              Read the paper here!
            </Link>
          </div>
        </div>

        <div className="h-fill mt-2 mb-2 flex flex-row gap-4">
          <div className="... basis-1/4 font-bold"> Oct. 2024 </div>
          <div className="... basis-3/4 text-left align-middle">
            {' '}
            Our work on predicting GPU interference under DL workload colocation is appearing in{' '}
            {<Link href="https://acmsocc.org/2024">SoCC'24</Link>}. {' '}
            <Link 
              href="/publications" 
              className="font-bold text-gray-700 dark:text-gray-300 hvr-underline-from-center">
              Read the paper here!
            </Link>
          </div>
        </div>


        <div className="mt-2 mb-2 flex flex-row gap-4">
          <div className="... basis-1/4 font-bold"> Aug. 2024 </div>
          <div className="... basis-3/4 text-left align-middle">
            {' '}
            Passed my PhD candidacy exam!{' '}
          </div>
        </div>
      </div>
    </div>
  )
}
