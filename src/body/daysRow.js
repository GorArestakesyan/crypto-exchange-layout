import React from "react";

function DaysRow() {
  let arr = ["1h", "24h", "7d", "1m", "3m", "6m", "1y", "All"];
  return arr.map((elm) => {
    return (
      <div
        key={elm}
        className={elm !== "7d" ? "daysContainer" : "daysContainerSpec"}
      >
        <span className="days">{elm}</span>
      </div>
    );
  });
}

export default DaysRow;
