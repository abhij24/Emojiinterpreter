import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😔": "Sad",
  "😳": "Shocked",
  "❤️": "Love",
  "🔥": "Fire",
  "😭": "Cry",
  "😜": "Wink",
  "🤡": "Clown",
  "👍": "Thumbs up",
  "🤝": "Handshake"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside outt!</h1>

      <input
        placeholder="Put an emoji here to know meaning"
        onChange={emojiInputHandler}
      />

      <div id="div1">{meaning}</div>
      <div style={{ fontSize: "2rem" }}>Emoji we know</div>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
