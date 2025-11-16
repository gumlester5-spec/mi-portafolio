
import React from 'react';

const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M10.75 4.75a.75.75 0 000 1.5h5.69l-8.22 8.22a.75.75 0 001.06 1.06l8.22-8.22v5.69a.75.75 0 001.5 0V5.5a.75.75 0 00-.75-.75h-7.5z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M5.5 5.5A2.5 2.5 0 003 8v10.5A2.5 2.5 0 005.5 21h10.5a2.5 2.5 0 002.5-2.5V13a.75.75 0 00-1.5 0v5.5a1 1 0 01-1 1H5.5a1 1 0 01-1-1V8a1 1 0 011-1h5a.75.75 0 000-1.5H5.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default ExternalLinkIcon;
   