// src/components/Services.jsx
import React from "react";
import ServiceCard from "./ServiceCard";
import "./ServiceCard.css"; // or a services css if you like

const Services = () => {
  return (
    <section className="services-section" style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2>Our Services</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        <ServiceCard
          title="Web Development"
          image="https://cdn-icons-png.flaticon.com/512/919/919827.png"
          description="Build modern and responsive websites."
        />
        <ServiceCard
          title="UI/UX Design"
          image="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
          description="Design user-friendly interfaces."
        />
        <ServiceCard
          title="React Training"
          image="https://cdn-icons-png.flaticon.com/512/919/919851.png"
          description="Learn React step-by-step with projects."
        />
      </div>
    </section>
  );
};

export default Services;
