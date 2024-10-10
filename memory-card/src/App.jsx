import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";
import Message from "./components/Message.jsx";
import Score from "./components/Score.jsx";
import HIghScore from "./components/HIghScore.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [message, setMessage] = useState("");
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      console.log("Fetching images...");
      const response = await fetch(
        "https://api.unsplash.com/photos/random?count=10&client_id=g712L41odhU0nTg4oN1D6en1kH1-XSFPit2PdPPYLSk"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Raw API response: ", data); 

      if (Array.isArray(data) && data.length > 0) {
        const imageUrls = data.map((img) => img.urls.small);
        console.log("Fetched image URLs: ", imageUrls); 
        setImages(imageUrls); 
      } else {
        console.error("Unexpected API response format", data);
      }
    } catch (error) {
      console.error("Error fetching images: ", error);
    }
  };

  const handleCardClick = (clickedImage) => {
    if (clickedCards.includes(clickedImage)) {
      if(score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setClickedCards([]);
      setMessage("You clicked this already! Start again...");
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, clickedImage]);
      setMessage("Good job! Keep it up!");
      shuffleCards();
    }
  };
  const shuffleCards = () => {
    setImages(images.sort(() => Math.random() - 0.5));
  };
  const resetGame = () => {
    setHighScore(score);
    setScore(0);
    setClickedCards([]);
    setMessage("Game reset! Click a card to start.");
    shuffleCards();
  };

  return (
    <>
      <Message message={message} />
      <Score score={score} />
      <HIghScore highScore={highScore} />
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
      <div className="card-container">
        {images.map((image) => (
          <Card
            key={image}
            image={image}
            onClick={() => handleCardClick(image)}
          />
        ))}
      </div>
    </>
  );
}

export default App;