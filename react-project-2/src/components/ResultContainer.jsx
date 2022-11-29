function ResultContainer({ outputValue, info, textColor }) {
  return (
    <div id="resultContainer" className="col-sm">
      <div className="row">
        <div className="col">
          <p id="equal" className={textColor}>
            {info}
          </p>
        </div>
        <div className="col">
          <p id="sum">{outputValue}</p>
        </div>
      </div>
    </div>
  );
}
export default ResultContainer;
