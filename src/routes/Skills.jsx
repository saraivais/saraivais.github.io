import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/Skills.css';
// teste
import IconCard from '../components/IconCard';
import skills from '../info/skills';
// import git from '../icons/git.svg';

function Skills() {
  return (
    <div className="skills-page">
      <Header />
      <section className="skills-container">
        { skills.map(({ image, name, description }) => (
          <IconCard imageSvg={image} iconName={name} iconDescription={description} />)) }
      </section>
      <Footer />
    </div>
  );
}

export default Skills;
