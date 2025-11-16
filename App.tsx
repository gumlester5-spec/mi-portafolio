
import React from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import IdeaGenerator from './components/IdeaGenerator';
import WelcomeOverlay from './components/WelcomeOverlay';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <WelcomeOverlay />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Header />
        <ProjectList />
        <IdeaGenerator />
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>Desarrollado con React, Tailwind CSS y Gemini API.</p>
      </footer>
    </div>
  );
};

export default App;
