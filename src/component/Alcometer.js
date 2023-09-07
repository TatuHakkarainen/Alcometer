import React, { useState } from "react";

function Alcometer() {
  const [weight, setWeight] = useState(89);
  const [gender, setGender] = useState("male");
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [result, setResult] = useState(0);

  const calculateBloodAlcoholLevel = (e) => {
    e.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;

    let calculatedResult;
    if (gender === "male") {
      calculatedResult = gramsLeft / (weight * 0.7);
    } else {
      calculatedResult = gramsLeft / (weight * 0.6);
    }

    if (calculatedResult < 0) {
      setResult(0);
    } else {
      setResult(calculatedResult.toFixed(2));
    }
  };

  return (
    <form onSubmit={calculateBloodAlcoholLevel}>
      <div>
        <h1>Calculating alcohol blood level</h1>
        <label>
          Weight:
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <br />
        <label>
          Bottles:
          <select value={bottles} onChange={(e) => setBottles(e.target.value)}>
            {Array.from({ length: 24 }, (_, i) => (
              <option key={i} value={i+1}>
                {i+1}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Time:
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            {Array.from({ length: 24 }, (_, i) => (
              <option key={i} value={i+1}>
                {i+1}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Gender:
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={() => setGender("male")}
          />
          Male
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={() => setGender("female")}
          />
          Female
        </label>
        <br />
        {result}
        <br />
        <button onClick={calculateBloodAlcoholLevel}>Calculate</button>
      </div>
    </form>
  );
}

export default Alcometer;
