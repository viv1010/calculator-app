import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };

  return (
    <div className="App">
      <div className="calc__wrapper">
        <div className="calc__inner__wrapper">
          <form>
            <input type="text" value={result} />
          </form>
        </div>
        <div className="buttons__row">
          <div className="row">
            <button className="button" name="7" onClick={handleClick}>
              7
            </button>
            <button className="button" name="8" onClick={handleClick}>
              8
            </button>
            <button className="button" name="9" onClick={handleClick}>
              9
            </button>
            <button className="button highlight" name="/" onClick={handleClick}>
              /
            </button>
          </div>
          <div className="row">
            <button className="button" name="4" onClick={handleClick}>
              4
            </button>
            <button className="button" name="5" onClick={handleClick}>
              5
            </button>
            <button className="button" name="6" onClick={handleClick}>
              6
            </button>
            <button className="button highlight" name="*" onClick={handleClick}>
              *
            </button>
          </div>
          <div className="row">
            <button className="button" name="1" onClick={handleClick}>
              1
            </button>
            <button className="button" name="2" onClick={handleClick}>
              2
            </button>
            <button className="button" name="3" onClick={handleClick}>
              3
            </button>
            <button className="button highlight" name="+" onClick={handleClick}>
              +
            </button>
          </div>
          <div className="row">
            <button className="button" name="0" onClick={handleClick}>
              0
            </button>
            <button className="button" name="." onClick={handleClick}>
              .
            </button>
            <button className="button" onClick={clear}>
              C
            </button>
            <button className="button highlight" name="-" onClick={handleClick}>
              -
            </button>
          </div>

          <button className="button calc" name="=" onClick={calculateResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
