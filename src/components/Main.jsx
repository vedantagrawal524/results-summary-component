import TestField from "./TestField";

export default function Main() {
  return (
    <main>
      <div className="card">
        <section className="result">
          <h1 className="result-head">Your Result</h1>
          <div className="result-percent">
            <span id="total-percent">76</span>of 100
          </div>
          <h2 className="result-remark">Great</h2>
          <p className="result-message">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>

        <section className="summary">
          <h1 className="summary-head">Summary</h1>

          <TestField />
          <TestField />
          <TestField />
          <TestField />

          <button className="continue" type="button">
            Continue
          </button>
        </section>
      </div>
    </main>
  );
}
