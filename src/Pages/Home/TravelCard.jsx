import PropTypes from 'prop-types';

const TravelCard = ({news}) => {
  const { image, name, title, description } = news;

  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt={name}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

TravelCard.propTypes = {
  news: PropTypes.object,
}

export default TravelCard;
