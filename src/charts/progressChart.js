import React from "react";
import { TbArrowCurveRight } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";

function ProgressChart() {
  return (
    <div className="chard6">
      <div className="chardTitleWrapper">
        <span className="chard2Title">Futures</span>
        <span className="chard2SeeMore">See more</span>
      </div>
      <div className="futuresContainer">
        <div className="futuresBox">
            <div>
          <div className="percentsContainer">
            <span className="date">3/22/2022 17:51:03 PM</span>
            <div className="percents">
              <span className="percentBox">
                <TbArrowCurveRight
                  name="TbArrowCurveRight"
                  size={18}
                  color={"#61E224"}
                  style={{ transform: "rotate(45deg)" }}
                />
                <FaDollarSign name="FaDollarSign" size={15} color={"#61E224"} />
                <span className="percentGreen">0.74</span>
              </span>
              <span className="percentBox">
                <TbArrowCurveRight
                  name="TbArrowCurveRight"
                  size={18}
                  color={"#FF0000"}
                  style={{ transform: "rotate(110deg)" }}
                />
                <span className="percentRed">0.58%</span>
              </span>
            </div>
            </div>
          </div>
          <div className="priceMainContainer">
          <div className="priceBox">
            <span className="price"><FaDollarSign name="FaDollarSign" color="#fff" className="dollarIcon" size={17}/>3,698.58</span>
          </div>
          </div>
        </div>
        <div className="futuresChart">
          <div className="daysInFutures">
            {["1h", "24h", "7d", "1m", "3m", "6m", "1y", "All"].map((elm) => {
              return (
                <div
                  key={elm}
                  className={
                    elm !== "7d" ? "daysContainer" : "daysContainerSpecFut"
                  }
                >
                  <span className="daysInFuturesText">{elm}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="futuresBottom">
          <div className="futuresBottomBox">
            <span className="futuresBottomText">Asset:</span>
            <div className="futuresLine" />
            <span className="es">ES</span>
          </div>
          <div className="futuresBottomBox">
            <span className="futuresBottomText">Margin balance</span>
            <div className="futuresLine" />
            <span className="futureBottomPrices">
              <FaDollarSign name="FaDollarSign" size={13} color={"#805AD5"} />
              <span className="futureBottomPrices">12.50</span>
            </span>
          </div>
          <div className="futuresBottomBox">
            <span className="futuresBottomText">Wallet balance</span>
            <div className="futuresLine" />
            <span className="futureBottomPrices">
              <FaDollarSign name="FaDollarSign" size={13} color={"#805AD5"} />
              <span className="futureBottomPrices">5,225.00</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressChart;
