'use client';
import { usePathname } from 'next/navigation';

export default function Publications() {
  return (
    <div>
      <div className="publication-entry">
        <span className="badge">SoCC '24</span> {/* You can update this label as per your conference */}
        <h3>
          <a href="your-paper-url">KACE: Kernel-Aware Colocation for Efficient GPU Spatial Sharing</a>
        </h3>
        <p>
          Bing-Shiun Han, Tathagata Paul, Zhenhua Liu, Anshul Gandhi
        </p>
        <p><em>In Proceedings of the 2024 ACM Symposium on Cloud Computing (SoCC 2024).</em></p>
        <p> </p>

        <div className="publication-links">
          <a href="pdf-url" className="button">PDF</a>
          <a href="preprint-url" className="button">Preprint</a>
          <a href="cite-url" className="button">Cite</a>
          <a href="https://github.com/nba556677go/KACE-artifact" className="button">Code</a>

        </div>
      </div>
    </div>
  );
}