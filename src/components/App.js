import React, { useState, useEffect } from 'react';

function App() {
  const [imageDog, setImageDog] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Inside the useEffect, send a fetch request to the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageDog(data.message);
        setIsLoaded(true);
      });
  }, []); // Empty dependency array to run the effect once on component mount

  return (
    <div>
      {isLoaded ? (
        <img src={imageDog} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
