import '../style/UnderConstruction.css';
import hammer from '../icons/hammer.svg';

function UnderCostruction() {
  return (
    <div className="construction-container">
      <h1 className="construction-title">Em construção</h1>
      <img className="construction-hammer" src={hammer} alt="hammer-icon" />
    </div>
  );
}

export default UnderCostruction;
