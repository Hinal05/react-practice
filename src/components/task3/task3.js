import React, { useState } from "react";
import "./task3.css";

function Task3() {

  const [text, setText] = useState("Enter Text here");

  const uppercase = () => {
    const value = text.toUpperCase();
    setText(value);
  }

  const lowercase = () => {
    const value = text.toLowerCase();
    setText(value);
  }

  const clear = () => {
    const value = '';
    setText(value);
  }

  const copyClipboard = () => {
    navigator.clipboard.writeText(text);
  }

  return (
    <>
      <h1>Text Utility</h1>
      <div className="wrapper">
        <h4>Enter the Text to analyse</h4>
        <div className="textfield">
          <textarea rows="10" placeholder={text} value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <button type="submit" onClick={uppercase}>Uppercase</button>
        <button type="submit" onClick={lowercase}>Lowercase</button>
        <button type="submit" onClick={clear}>Clear</button>
        <button type="submit"onClick={copyClipboard}>Copy clipboard</button>
      </div>
      <div className="wrapper">
        <h4>Your Text Summary</h4>
        <p>{text ? text. match(/(\w+)/g).length : 0} words and {text ? text.length : 0} character</p>
      </div>
      <div className="wrapper">
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  )
}

export default Task3;