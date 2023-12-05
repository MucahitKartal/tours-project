import React from "react";

const tour = ({ id, name, image, info, price }) => {
  return (
    <div className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{info}</p>
      </footer>
    </div>
  );
};

export default tour;
