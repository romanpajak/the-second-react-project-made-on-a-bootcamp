function Logo() {
  const dollar = String.fromCodePoint(0x00024);
  const euro = String.fromCodePoint(0x020ac);
  const chf = String.fromCodePoint(67);
  return (
    <div
      id="logo"
      className="col-md d-flex justify-content-center d-flex align-items-center"
    >
      <div id="currency-container">
        <span>{euro}</span>
        <span> {dollar}</span>
        <span> {chf}</span>
      </div>
    </div>
  );
}
export default Logo;
