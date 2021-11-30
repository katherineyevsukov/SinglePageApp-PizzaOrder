import React from "react";
import { Link } from "react-router-dom";
import "../styling/Home.css";

export default function Home() {
  return (
    <div className="hero-container">
      <h2>Your favorite food, delivered while coding</h2>
      <Link id="order-pizza" to="/pizza">
        Pizza?
      </Link>
    </div>
  );
}
