import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import DaysRow from "../body/daysRow";
function CircleChart() {
  return (
    <div className="chard3">
      <div className="chardTitleWrapper">
        <span className="chard2Title">Coins</span>
        <span className="chard2SeeMore">See more</span>
      </div>
      <div className="circleWrapper">
        <div className="circlesContainer">
        <div className="circleTop">
          <div>
            <span className="circleInnerTopWord">TOP </span>
            <span className="circleInnerGainer">Gainer</span>
          </div>
          <span className="apecoin">Apecoin</span>
          <div className="arrow-percent">
            <AiOutlineArrowUp
              name="AiOutlineArrowUp"
              size={15}
              color={"#61E224"}
            />
            <span className="cirlcePercent">0.74%</span>
          </div>
        </div>
        <div className="circleTop">
          <div>
            <span className="circleInnerTopWord">TOP </span>
            <span className="circleInnerLooser">Looser</span>
          </div>
          <span className="apecoin">Apecoin</span>
          <div className="arrow-percent">
            <AiOutlineArrowDown
              name="AiOutlineArrowUp"
              size={15}
              color={"#FF0000"}
            />

            <span className="cirlcePercent">0.74%</span>
          </div>
        </div>
        </div>
      </div>
      <div className="daysWrapper">
        <DaysRow />
      </div>
    </div>
  );
}

export default CircleChart;
