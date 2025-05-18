export default function TestField(props) {
  return (
    <div
      className="test-field"
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <div className="field-type">
        <img className="field-img" src={props.icon} alt={props.name} />
        <p
          className="field-name"
          style={{
            color: props.color,
          }}
        >
          {props.name}
        </p>
      </div>
      <p className="field-percent">
        <span className="percent">{props.score}</span> / 100
      </p>
    </div>
  );
}
