import { useState, useEffect } from "react";

function Score({ score }, {highScore}) {
  return (
    <>
      <div className="score">
        <h3>Score is: {score}</h3>
      </div>
    </>
  );
}

export default Score;