// app/certificate/page.js
import React from 'react';

export default function CertificatePage() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <iframe
        src="/pbkatalog.pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Certificate"
      />
    </div>
  );
}