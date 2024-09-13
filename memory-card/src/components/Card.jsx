import { useState, useEffect } from "react";

function Card({ image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt="Memory Card" />
    </div>
  );
}

export default Card;