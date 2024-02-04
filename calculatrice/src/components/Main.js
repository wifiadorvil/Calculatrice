import React, { useState } from "react";
export default function Main() {
  const [valeurCalcul, setValeurCalcul] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(valeurCalcul);
        var resultString = result.toString();

        var indexVirgule = resultString.indexOf(".");

        if (resultString.length - indexVirgule - 1 > 7) {
          setValeurCalcul(parseFloat(result).toFixed(7).toString());
        } else {
          setValeurCalcul(result.toString());
        }
      } catch (error) {
        setValeurCalcul("Error");
      }
    } else if (value === "%") {
      try {
        const result = eval(valeurCalcul) / 100;
        var resultString = result.toString();

        var indexVirgule = resultString.indexOf(".");

        if (resultString.length - indexVirgule - 1 > 7) {
          setValeurCalcul(parseFloat(result).toFixed(7).toString());
        } else {
          setValeurCalcul(result.toString());
        }
      } catch (error) {
        setValeurCalcul("Error");
      }
    } else if (value === "DEL") {
      setValeurCalcul((p) => p.slice(0, p.length - 1));
    } else if (value === "AC") {
      setValeurCalcul("");
    } else {
      setValeurCalcul(valeurCalcul + value);
    }
  };

  return (
    <main>
      <div className="calculator">
        <input
          type="texte"
          value={valeurCalcul}
          id="inputBox"
          placeholder="0"
        />

        <div className="containerBtn">
          {["AC", "DEL", "%", "/"].map((i) => (
            <button
              className={"buttonCalcul"}
              onClick={() => handleButtonClick(i)}
            >
              {i}
            </button>
          ))}
        </div>
        <div className="containerBtn">
          {["7", "8", "9"].map((i) => (
            <button className={"button"} onClick={() => handleButtonClick(i)}>
              {i}
            </button>
          ))}

          <button
            onClick={() => handleButtonClick("*")}
            className="buttonCalcul "
          >
            ×
          </button>
        </div>
        <div className="containerBtn">
          {["4", "5", "6", "-"].map((i) => (
            <button
              className={i === "-" ? "buttonCalcul" : "button"}
              onClick={() => handleButtonClick(i)}
            >
              {i}
            </button>
          ))}
        </div>

        <div className="containerBtn">
          {["1", "2", "3", "+"].map((i) => (
            <button
              className={i === "+" ? "buttonCalcul" : "button"}
              onClick={() => handleButtonClick(i)}
            >
              {i}
            </button>
          ))}
        </div>
        <div className="containerBtn">
          {["00", ".", "0", "="].map((i) => (
            <button
              className={i === "=" ? "buttonEqual" : "button"}
              onClick={() => handleButtonClick(i)}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
