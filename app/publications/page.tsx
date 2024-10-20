import React from 'react'; // Ensure React is imported
'use client'; // Use this if you are in a client component

export default function Publications() {
  return (
    <div>
      <div className="publication-entry">
        <span className="badge">SoCC '24</span> {/* Conference label */}
        <h3>
          <a href="your-paper-url">KACE: Kernel-Aware Colocation for Efficient GPU Spatial Sharing</a>
        </h3>
        <p>
          Bing-Shiun Han, Tathagata Paul, Zhenhua Liu, Anshul Gandhi
        </p>
        <p><em>In Proceedings of the 2024 ACM Symposium on Cloud Computing (SoCC 2024).</em></p>
        <p>&nbsp;</p>

        <div className="flex flex-row space-x-3 pt-6">
          <a href="pdf-url">PDF</a>
          <a href="preprint-url">Preprint</a>
          <a href="cite-url">Cite</a>
          <a href="https://github.com/nba556677go/KACE-artifact">Code</a>
        </div>
      </div>
    </div>
  );
}
