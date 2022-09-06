import React from 'react';
import Carousel from 'react-multi-carousel';
import Header from '../components/Header';
// import UnderCostruction from '../components/UnderConstruction';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import projects from '../info/projects';
import '../style/Projects.css';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Projects() {
  return (
    <div className="projects">
      <Header />
      <div className="carousel">
        <Carousel
          arrows
          showDots
          draggable
          infinite
          responsive={responsive}
        >
          { projects
            .map(({
              name,
              image,
              repo,
              description,
              stacks,
            }) => (
              <ProjectCard
                name={name}
                image={image}
                repo={repo}
                description={description}
                stacks={stacks}
              />
            )) }
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
