import React, { useState, useEffect } from "react";

function DateAndTime({ time }) {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      let cur = new Date(time * 1000);
      let dateOption = {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      let formatter = new Intl.DateTimeFormat("en-us", dateOption);
      setCurrentDateTime(formatter.format(cur));
    };

    updateDateTime(); // Initial update
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <span className="dateandtime container-fluid">
      Updated at {currentDateTime}
    </span>
  );
}

export default DateAndTime;
