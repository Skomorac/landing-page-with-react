// Card.js
import React from "react";
import "../../styles/card.css";

const Card = ({ imageUrl, title, text, btnText }) => {
  const placeholderImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='325' viewBox='0 0 500 325'%3E%3Crect width='100%' height='100%' fill='%23ddd'/%3E%3Ctext x='50%' y='50%' font-size='50' text-anchor='middle' fill='%23777'%3E500x325%3C/text%3E%3C/svg%3E`;

  return (
    <div className="card text-center mx-2" style={{ width: "18rem" }}>
      <img
        src={imageUrl || placeholderImage}
        className="card-img-top"
        alt="Card Placeholder"
      />
      <div className="card-body p-0">
        <h5 className="card-title mt-3">{title}</h5>
        <p className="card-text">{text}</p>
        <div class="card-footer">
          <a href="#" className="btn btn-primary cardButton">
            {btnText || "Go somewhere"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
