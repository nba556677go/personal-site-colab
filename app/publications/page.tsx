'use client';
import { usePathname } from 'next/navigation';

export default function Publications() {
  return (
    <div>
      <div className="publication-entry" style={{ padding: '20px', backgroundColor: '#2c2c2c', borderRadius: '8px', marginBottom: '20px' }}>
        <span className="badge" style={{ backgroundColor: '#ff5722', padding: '5px 10px', color: 'white', borderRadius: '5px', fontSize: '14px', fontWeight: 'bold' }}>SoCC '24</span>
        <h3 style={{ marginTop: '10px', color: '#ffffff', fontSize: '22px', fontWeight: 'bold' }}>
          <a href="your-paper-url" style={{ color: '#ffa726', textDecoration: 'none' }}>KACE: Kernel-Aware Colocation for Efficient GPU Spatial Sharing</a>
        </h3>
        <p style={{ color: '#ffffff', fontSize: '16px' }}>
          Bing-Shiun Han, Tathagata Paul, Zhenhua Liu, Anshul Gandhi
        </p>
        <p style={{ color: '#bdbdbd', fontSize: '14px', fontStyle: 'italic' }}>
          In Proceedings of the 2024 ACM Symposium on Cloud Computing (SoCC 2024).
        </p>

        <div className="publication-links" style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a href="pdf-url" className="button" style={buttonStyle}>PDF</a>
          <a href="preprint-url" className="button" style={buttonStyle}>Preprint</a>
          <a href="cite-url" className="button" style={buttonStyle}>Cite</a>
          <a href="https://github.com/nba556677go/KACE-artifact" className="button" style={buttonStyle}>Code</a>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#ff5722',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  fontSize: '14px',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease',
};