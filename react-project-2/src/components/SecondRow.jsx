import { useState } from "react";
import FormContainer from "./FormContainer";
import ResultContainer from "./ResultContainer";
function SecondRow() {
  const [outVal, setOutVal] = useState("0 PLN");
  const [numbInputValue, setNumbInputValue] = useState("");
  const handleInputChange = (e) => {
    setNumbInputValue(e.target.value);
  };
  const [currencySelectValue, setCurrencySelectValue] = useState("");
  const handleSelectCurrency = (e) => {
    setCurrencySelectValue(e.target.value);
  };
  const [firstInfo, setFirstInfo] = useState("To");
  const [infoColor, setInfoColor] = useState("normal-color");
  const [loaderClass, setLoaderClass] = useState(false);

  function calculateCurrency() {
    if (numbInputValue === "" || numbInputValue <= 0) {
      setInfoColor("warning-color");
      setFirstInfo("Wpisz wartość liczbową powyżej zera");
      setNumbInputValue(0);
      setCurrencySelectValue("EUR");
      setOutVal("");
      return;
    }
    setInfoColor("normal-color");
    setFirstInfo("To");
    setOutVal("");
    setLoaderClass(true);

    const url = `https://api.nbp.pl/api/exchangerates/rates/c/${currencySelectValue.toLocaleLowerCase()}/today/?format=json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const currencyBid = data.rates[0].bid;
        const outValue = (
          Math.round(currencyBid * numbInputValue * 100) / 100
        ).toFixed(2);
        setFirstInfo(numbInputValue + " " + currencySelectValue + " to");
        setOutVal(outValue + " PLN");
        setNumbInputValue(0);
        setCurrencySelectValue("EUR");
        setLoaderClass(false);
      })
      .catch((err) => setFirstInfo(err));
  }
  return (
    <div className="row second-row">
      <FormContainer
        handleChange={handleInputChange}
        numbValue={numbInputValue}
        currencyValue={currencySelectValue}
        handleCurrency={handleSelectCurrency}
        getCurrencyVal={calculateCurrency}
        loaderStatus={loaderClass}
      />
      <ResultContainer
        outputValue={outVal}
        info={firstInfo}
        textColor={infoColor}
      />
    </div>
  );
}
export default SecondRow;
