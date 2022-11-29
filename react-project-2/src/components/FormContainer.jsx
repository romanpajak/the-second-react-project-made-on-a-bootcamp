function FormContainer({
  handleChange,
  numbValue,
  currencyValue,
  handleCurrency,
  getCurrencyVal,
  loaderStatus,
}) {
  let loader = "btn-submit btn-sm rounded";
  if (loaderStatus === true) {
    loader += " button-loading btn-color-on-loader";
  }
  return (
    <div className="col-sm">
      <form id="calculator">
        <div className="input-group">
          <input
            id="currAmount"
            type="number"
            pattern="^\d+"
            className="form-control form-control-sm"
            placeholder="Ilość waluty"
            onChange={handleChange}
            value={numbValue}
          />
          <select
            id="currencyKind"
            className="form-control form-control-sm "
            value={currencyValue}
            onChange={handleCurrency}
          >
            <option>EUR</option>
            <option>USD</option>
            <option>CHF</option>
          </select>
          <button
            id="btn-calc"
            type="button"
            onClick={getCurrencyVal}
            className={loader}
          >
            Przelicz
          </button>
        </div>
      </form>
    </div>
  );
}
export default FormContainer;
