import { useState, useEffect } from "react";

function HIghScore({highScore}) {
  return (
    <>
      <div className="high-score">
        <h3>High Score: {highScore}</h3>
      </div>
    </>
  );
}

export default HIghScore;