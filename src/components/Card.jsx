import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="Dog" className="card-image" />
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Card;