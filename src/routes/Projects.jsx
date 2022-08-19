import React from 'react';
import Header from '../components/Header';
import UnderCostruction from '../components/UnderConstruction';
import Footer from '../components/Footer';
import '../style/Projects.css';

function Projects() {
  return (
    <div className="projects">
      <Header />
      <UnderCostruction />
      <Footer />
    </div>
  );
}

export default Projects;
