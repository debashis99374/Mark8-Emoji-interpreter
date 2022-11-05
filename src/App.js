import "./styles.css";
import React, { useState } from "react";
var emojiDictonary = {
  "⚽": "football",
  "⚾": "baseball",
  "🏀": "basketball",
  "🏈": "rugbyball"
};
var emojilist = Object.keys(emojiDictonary);
export default function App() {
  var [meaning, setmeaning] = useState("");
  function inputHandler(i) {
    var userInput = i.target.value;
    var meaning = emojiDictonary[userInput];

    console.log(meaning);
    if (meaning === undefined) {
      meaning = "sorry we dont have this emoji currently!!";
      console.log("sorry we dont have this emoji");
    }
    setmeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    console.log(emoji);
    var meaning = emojiDictonary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji interpreter!!</h1>
      <input placeholder="Enter emoji" onChange={inputHandler}></input>
      <h3>{meaning}</h3>

      <h3> Emoji collection</h3>

      {emojilist.map(function (emoji) {
        return <span onClick={() => emojiClickHandler(emoji)}>{emoji}</span>;
      })}
      <footer>
        <h3>About:</h3>
        <p>This is app to showcase emojy names by search or by click </p>
      </footer>
    </div>
  );
}
