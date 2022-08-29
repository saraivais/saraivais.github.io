import propTypes from 'prop-types';
import '../style/IconCard.css';

function IconCard({
  imageSvg,
  iconName,
  iconDescription,
}) {
  return (
    <div className="skill-card">
      <img src={imageSvg} className="skill-img" alt={iconName} />
      <div className="text-container">
        <h4 className="skill-title">{iconName}</h4>
        <p className="skill-desc">{iconDescription}</p>
      </div>

    </div>
  );
}

IconCard.propTypes = {
  imageSvg: propTypes.string.isRequired,
  iconName: propTypes.string.isRequired,
  iconDescription: propTypes.string.isRequired,
};

export default IconCard;
