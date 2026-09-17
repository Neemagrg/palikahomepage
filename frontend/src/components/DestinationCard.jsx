function DestinationCard({
  image,
  category,
  title,
  description
}) {
  return (
    <article className="destination-card">

      <div className="destination-image">

        <img
          src={image}
          alt={title}
        />

        <span className="destination-category">
          {category}
        </span>

      </div>

      <div className="destination-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <button className="read-more">
          थप हेर्नुहोस् →
        </button>

      </div>

    </article>
  );
}

export default DestinationCard;