
import React from 'react';

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g stroke="currentColor" strokeWidth="4" fill="none">
      <path d="M50,10 A40,40 0 0,1 50,90" />
      <path d="M50,10 A40,40 0 0,0 50,90" strokeDasharray="5, 5" />
      <path d="M30,35 A10,15 0 0,1 50,35" />
      <path d="M70,65 A10,15 0 0,0 50,65" strokeDasharray="3,3"/>
    </g>
  </svg>
);
