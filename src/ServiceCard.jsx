// src/components/ServiceCard.jsx
import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ title, image, description }) => {
  return (
    <div className="service-card">
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
