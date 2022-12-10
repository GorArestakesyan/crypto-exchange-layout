import React from "react";
import LineChart from "../charts/lineChart";
import ListItem from "../charts/listItem";
import ProgressChart from "../charts/progressChart";
import BarChart from "../charts/barChart";
import CircleChart from "../charts/circleChart";
import RowProgressChart from "../charts/rowProgressChart";
import BottomTable from "./bottomTable";
import {MdOutlineArrowDropDown} from 'react-icons/md'
function Body() {
  return (
    <div className="bodyContainer">
      <div className="firstChards">
        <div className="chard1">
          <div className="chardTitleWrapper">
            <span className="chard2Title">Total Points</span>
            <div className="allOneYear">
              <div className="all">
                <span className="allText">All</span>
                <MdOutlineArrowDropDown name="MdOutlineArrowDropDown" size={14} color={'#fff'}/>
              </div>
              <div className="oneYear">
              <span className="oneYearText">1 year</span>
                <MdOutlineArrowDropDown name="MdOutlineArrowDropDown" size={12} color={'#fff'}/>
              </div>
            </div>
            <span className="chard2SeeMore">See more</span>
          </div>
          <LineChart />
          <div className="lineChartChecks">
            <div class="checkbox">
              <input type="checkbox" id="checkbox" name="" value="" />
              <label for="checkbox"></label>
            </div>
            <span className="usd">USD</span>
            <div class="checkbox2">
              <input type="checkbox" id="checkbox2" name="" value="" />
              <label for="checkbox2"></label>
            </div>
            <span className="btc">BTC</span>
            <div class="checkbox3">
              <input type="checkbox" id="checkbox3" name="" value="" />
              <label for="checkbox3"></label>
            </div>
            <span className="eth">ETH</span>
          </div>
        </div>
        <div className="chard12wrapper">
        <BarChart />
        <CircleChart />
        </div>
      </div>
      <div className="secondChards">
        <RowProgressChart />
        <ListItem />
        <ProgressChart />
      </div>
      <div className="statistics">
        <BottomTable />
      </div>
    </div>
  );
}

export default Body;
