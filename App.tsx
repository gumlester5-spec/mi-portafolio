
import React from 'react';
import Layout from './components/Layout';
import Timeline from './components/Timeline';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import WelcomeOverlay from './components/WelcomeOverlay';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      <WelcomeOverlay />
      <Layout>
        <Header />
        <ProjectList />
        <Timeline />
        <Contact />
      </Layout>
    </>
  );
};

export default App;
