import React from "react";
import "./App.css";
import Menu1 from "./images/menu-1.jfif";
import Menu3 from "./images/menu-3.jfif";
import Carousel from "react-bootstrap/Carousel";

function App() {
  const images = [Menu1, Menu3];

  return (
    <div className="App">
      <Carousel fade variant="dark">
        {images.map((image, index) => (
          <Carousel.Item key={image}>
            <img className="img-fluid" src={image} alt={`pic-${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
