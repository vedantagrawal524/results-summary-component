import TestField from "./TestField";
import { useState } from "react";
import { useEffect } from "react";

export default function Main() {
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setTestResults(data));
  }, []);

  const averageScore = testResults.length
    ? Math.round(
        testResults.reduce((sum, item) => sum + item.score, 0) /
          testResults.length
      )
    : 0;

  const percentile = 65;

  return (
    <main>
      <div className="card">
        <section className="result">
          <h1 className="result-head">Your Result</h1>
          <div className="result-percent">
            <span id="total-percent">{averageScore}</span>of 100
          </div>
          <h2 className="result-remark">Great</h2>
          <p className="result-message">
            You scored higher than {percentile}% of the people who have taken
            these tests.
          </p>
        </section>

        <section className="summary">
          <h1 className="summary-head">Summary</h1>

          {testResults.map((result, index) => (
            <TestField
              key={index}
              name={result.category}
              score={result.score}
              icon={result.icon}
              color={result.color}
              bgColor={result.bgColor}
            />
          ))}

          <button className="continue" type="button">
            Continue
          </button>
        </section>
      </div>
    </main>
  );
}
