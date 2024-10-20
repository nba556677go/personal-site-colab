import React from 'react';
'use client';

import { Courgette } from 'next/font/google';
const courgette = Courgette({
  subsets: ['latin'],
  weight: "400"
});

export default function Publications() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <h3 className={`text-2xl font-bold leading-8 tracking-tight text-gray-700 dark:text-gray-300 ${courgette.className}`}>Publications</h3>
        </div>

        <div className="prose max-w-none pt-8 pb-2 dark:prose-dark xl:col-span-2">
          <div className="publication-entry">
           <span className="badge text-gray-700 dark:text-gray-300 transition-colors duration-700 hover:text-orange-500">
              SoCC '24
            </span>
            <h3 className="text-left text-xl font-bold text-gray-700 transition-colors duration-700 dark:text-gray-300">
              <a href="your-paper-url" className="hover:text-orange-500">KACE: Kernel-Aware Colocation for Efficient GPU Spatial Sharing</a>
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Bing-Shiun Han, Tathagata Paul, Zhenhua Liu, Anshul Gandhi
            </p>
            <p className="italic text-gray-500 dark:text-gray-400">
              To be appear in Proceedings of the 2024 ACM Symposium on Cloud Computing (SoCC 2024).
            </p>

            <div className="flex flex-row space-x-3 pt-6">
              <a href="pdf-url" className="button">PDF</a>
              <a href="preprint-url" className="button">Preprint</a>
              <a href="cite-url" className="button">Cite</a>
              <a href="https://github.com/nba556677go/KACE-artifact" className="button">Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
