import { useState, useEffect } from "react";

function Score({ score }) {
  return (
    <div className="score">
      <h3>Score: {score}</h3>
    </div>
  );
}

export default Score;