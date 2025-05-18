export default function TestField() {
  return (
    <div className="test-field">
      <div className="field-type">
        <img
          className="field-img"
          src="/src/assets/images/icon-reaction.svg"
          alt="Reaction Icon"
        />
        <p className="field-name">Reaction</p>
      </div>
      <p className="field-percent">
        <span className="percent">80</span> / 100
      </p>
    </div>
  );
}
