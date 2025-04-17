'use client';
import Link from '@/app/ui/Link'
import { Courgette } from 'next/font/google';

const courgette = Courgette({
  subsets: ['latin'],
  weight: "400"
});

export default function Publications() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="items-start space-y-8 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <h3 className={`text-2xl font-bold leading-8 tracking-tight text-gray-700 dark:text-gray-300 ${courgette.className}`}>Publications</h3>
        </div>

        <div className="prose max-w-none pt-8 pb-2 dark:prose-dark xl:col-span-2">

          <div className="publication-entry mb-4">
            <span className="text-gray-700 text-xl dark:text-gray-300 transition-colors duration-700 hover:text-orange-500">
              {<Link href="https://ai-crossroads.github.io/">AICrossroads'25</Link>}
            </span>
            <h3 className="text-left text-xl font-bold text-gray-700 transition-colors duration-700 dark:text-gray-300">
              <a href="/static/publications/preprint/AICrossroads.pdf" className="hover:text-orange-500">Energy-efficient GPU SM allocation</a>
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Bing-Shiun Han, Tathagata Paul, Zhenhua Liu, Anshul Gandhi</p>
            <p className="italic text-gray-500 dark:text-gray-400">AI Crossroads: Systems, Energy, and Applications, ACM SIGMETRICS 2025 Workshop</p>

            <div className="flex flex-row space-x-3 pt-4">
              <a href="/static/publications/preprint/AICrossroads.pdf" className="border border-solid border-2 border-teal-500 text-teal-500 px-4 dark:text-teal-500 rounded transition-colors duration-300 hover:bg-teal-500 hover:text-white dark:hover:text-gray-300 no-underline">
                Preprint
              </a>
            </div>
          </div>

          <div className="publication-entry mb-4">
            <span className="text-gray-700 text-xl dark:text-gray-300 transition-colors duration-700 hover:text-orange-500">
              {<Link href="https://acmsocc.org/2024">SoCC'24</Link>}
            </span>
            <h3 className="text-left text-xl font-bold text-gray-700 transition-colors duration-700 dark:text-gray-300">
              <a href="https://dl.acm.org/doi/10.1145/3698038.3698555" className="hover:text-orange-500">KACE: Kernel-Aware Colocation for Efficient GPU Spatial Sharing</a>
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Bing-Shiun Han, Tathagata Paul, Zhenhua Liu, Anshul Gandhi</p>
            <p className="italic text-gray-500 dark:text-gray-400">Proceedings of the 2024 ACM Symposium on Cloud Computing (SoCC 2024)</p>

            <div className="flex flex-row space-x-3 pt-4">
              <a href="/static/publications/preprint/KACE_preprint.pdf" className="border border-solid border-2 border-teal-500 text-teal-500 px-4 dark:text-teal-500 rounded transition-colors duration-300 hover:bg-teal-500 hover:text-white dark:hover:text-gray-300 no-underline">
                PDF
              </a>
              {/*<a href="cite-url" className="border border-solid border-2 border-teal-500 text-teal-500 px-4 dark:text-teal-500 rounded transition-colors duration-300 hover:bg-teal-500 hover:text-white dark:hover:text-gray-300 no-underline">
                Cite
              </a>*/}
              <a href="https://github.com/nba556677go/KACE-artifact" className="border border-solid border-2 border-teal-500 text-teal-500 px-4 dark:text-teal-500 rounded transition-colors duration-300 hover:bg-teal-500 hover:text-white dark:hover:text-gray-300 no-underline">
                Code
              </a>
              <a href="/static/publications/slides/kace_socc_pres.pdf" className="border border-solid border-2 border-teal-500 text-teal-500 px-4 dark:text-teal-500 rounded transition-colors duration-300 hover:bg-teal-500 hover:text-white dark:hover:text-gray-300 no-underline">
                Slides
              </a>
            </div>
          </div>

          {/* Second Publication Entry */}
          <div className="publication-entry mb-4">
            <span className="text-gray-700 text-xl dark:text-gray-300 transition-colors duration-700 hover:text-orange-500">
              {<Link href="https://www.cs.stonybrook.edu">Stony Brook University</Link>}
            </span>
            <h3 className="text-left text-xl font-bold text-gray-700 transition-colors duration-700 dark:text-gray-300">
              <a href="/static/publications/preprint/RPE.pdf" className="hover:text-orange-500">Predicting workload colocations under GPU spatial sharing</a>
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Bing-Shiun Han</p>
            <p className="italic text-gray-500 dark:text-gray-400">Research Report for candidacy exam</p>

            <div className="flex flex-row space-x-3 pt-4">
              <a href="/static/publications/preprint/RPE.pdf" className="border border-solid border-2 border-teal-500 text-teal-500 px-4 dark:text-teal-500 rounded transition-colors duration-300 hover:bg-teal-500 hover:text-white dark:hover:text-gray-300 no-underline">
                PDF
              </a>
              <a href="/static/publications/preprint/GPUresearch_slides.pdf" className="border border-solid border-2 border-teal-500 text-teal-500 px-4 dark:text-teal-500 rounded transition-colors duration-300 hover:bg-teal-500 hover:text-white dark:hover:text-gray-300 no-underline">
                Slides
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
