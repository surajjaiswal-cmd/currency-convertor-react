import CurrencyList from "../api/CurrencyList.json";

const Options = () => {
  return (
    <>
      {Object.entries(CurrencyList).map(([curcode, curName]) => (
        <option key={curcode} value={curcode}>
          {curName}
        </option>
      ))}
    </>
  );
};

export default Options;
