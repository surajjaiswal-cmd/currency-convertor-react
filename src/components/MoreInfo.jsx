import { useState, useEffect } from "react";
import DateAndTime from "./DateAndTime";
import { useSelector } from "react-redux";
import CurrencyList from "../api/CurrencyList.json";

const MoreInfo = ({ data }) => {
  const [time, setTime] = useState("");
  const from = useSelector((state) => state.from);
  const to = useSelector((state) => state.to);
  const fromCurrency = useSelector((state) => state.fromCurrency);
  const toCurrency = useSelector((state) => state.toCurrency);
  useEffect(() => {
    if (data) {
      setTime(data.time_last_updated);
    }
  }, [data]);
  return (
    <>
      <div className="update-at">
        <DateAndTime time={time} />
      </div>
      <div className="final">
        <p>
          <b>
            <span className="final-from-price">{from}</span>
          </b>
          <span className="final-from"> {CurrencyList[fromCurrency]} </span>{" "}
        <b>=</b>
          <b>
            <span className="final-to-price"> {to} </span>
          </b>
          <span className="final-to"> {CurrencyList[toCurrency]} </span>
        </p>
      </div>
      <a
        href={`https://www.google.com/finance/quote/${fromCurrency}-${toCurrency}?sa=X&ved=2ahUKEwi5pY6u9e-JAxUecWwGHQ0oOu0QmY0JegQIARAs`}
        className="more-about btn"
        target="_blank">
        {`More About  ${fromCurrency}/${toCurrency}`}
      </a>
    </>
  );
};
export default MoreInfo;
