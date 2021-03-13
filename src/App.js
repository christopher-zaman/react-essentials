import React, { useState } from "react";
import './App.css';


function App() {
  const [emotion, setEmotion] = useState("Happy");
  return (
    <>
    <h1>Current emotion is {emotion}.</h1>

    <button onClick={() => setEmotion("Happy")}>
      Happy
    </button>

    <button onClick={() => setEmotion("Frustrated")}>
      Frustrated
    </button>

    <button onClick={() => setEmotion("Enthusiastic")}>
      Enthuse
    </button>
    </>
  );
}

export default App;
