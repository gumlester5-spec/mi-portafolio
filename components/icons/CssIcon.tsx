import React from 'react';

const CssIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" {...props}>
    <path fill="#1572B6" d="M19 3l10 112 45 12 45-12 10-112z"/>
    <path fill="#33A9DC" d="M64 119l36-10 8-94H64z"/>
    <path fill="#EBEBEB" d="M64 52H41l1 11h22v11H43l1 11h20v11l-31-9-2-24-1-11-1-11 1-11h54z"/>
    <path fill="#FFF" d="M64 52V41h23l-1 11h-22zm22 11l-1 11H64v-11h22zm-1 22l-2 24-19 5v-11l14-4 1-13h6z"/>
  </svg>
);

export default CssIcon;
