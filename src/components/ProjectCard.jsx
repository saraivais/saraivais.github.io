import propTypes from 'prop-types';
import '../style/ProjectCard.css';

function ProjectCard({
  name,
  image,
  repo,
  description,
  stacks,
}) {
  return (
    <div className="project-card">
      <img className="project-image" src={image} alt={`${name}-project`} />
      <div className="project-info">
        <h1 className="project-title">{ name }</h1>
        <a className="project-repo" href={repo} target="_blank" rel="noreferrer">Acesse o repositório</a>
        <p className="project-description">{description}</p>
        <p className="project-stacks">{stacks}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  repo: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  stacks: propTypes.string.isRequired,
};

export default ProjectCard;
