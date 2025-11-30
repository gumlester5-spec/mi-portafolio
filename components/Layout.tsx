import React from 'react';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen font-sans text-slate-300 bg-slate-900 bg-gradient-to-br from-blue-900/30 via-cyan-800/30 to-purple-900/40">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pt-20 md:pt-24">
        {children}
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>Desarrollado con React, Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Layout;