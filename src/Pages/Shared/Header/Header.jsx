import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Header = ({item}) => {
  // eslint-disable-next-line react/prop-types
  const { id,name, image } = item;
//   console.log(id);
  return (
    <Link to={`/travel/${id}`}>
      <div className="card">
        <img className="h-96 mr-5" src={image} alt="product image" />
        <h2 className="text-center text-2xl font-bold">{name}</h2>
      </div>
    </Link>
  );
};

Header.propTypes = {
  item: PropTypes.object,
}

export default Header;
