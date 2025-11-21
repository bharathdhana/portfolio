import React from 'react';

const Resume = () => (
  <section className="py-5 bg-light text-center">
    <h2 className="section-title mb-4">My Resume</h2>
    <iframe
      src="/Resume.pdf"
      title="Resume"
      width="80%"
      height="600px"
      style={{ border: '1px solid #ccc', borderRadius: '5px' }}
    ></iframe>
    <p className="mt-3">
      If you cannot view it, <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">download here</a>.
    </p>
  </section>
);

export default Resume;
