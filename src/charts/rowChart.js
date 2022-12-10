import React from "react";

const Row = () => {
  let heights = [
    100,
    120,
    140,
    140,
    120,
    100,
    90,
    80,
    75,
    85,
    89,
    95,
    98,
    110,
    120,
    160,
    170,
    185,
    195,
    180,
    185,
    170,
    160,
    157,
    150,
    150,
    160,
    165,
    168,
    168,
    160,
    150,
    140,
    140,
    130.145,
    155,
    155,
    145,
    130,
    90,
  ];
  return heights.map((elm) => {
    return (
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(147, 126, 193, 0.6) 0%, rgba(147, 126, 193, 0) 100%)",
          borderRadius: "3px",
          width: "2.5%",
          margin: "0px 0.18%",
          height: `${elm}px`,
          transform: "rotate(360deg)",
        }}
      ></div>
    );
  });
};

export default Row;
