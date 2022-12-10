import React from "react";
import { BsEyeSlashFill, BsSortDown } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import FoxIcon from "../svg/fox";
import SidebarStatistic1 from "../svg/sidebarStatistic1";
import GreenStat from "../svg/greenStat";
import BinanceIcon from "../svg/binanceIcon";
import CIcon from "../svg/cIcon";
function SidebarTop() {
  return (
    <div
    className="sidebarTopContainer"  >
      <div className="slidetTopButttons">
        <div className="slidebarTopBtn">
          <button className="hideBalancesBtn">
            <span className="hideBalancesText">Hide small balances </span>
            <BsEyeSlashFill name="BsEyeSlashFill" size={15} color={"#805AD5"} />
          </button>
          <button className="sortBalancesBtn">
            <span className="hideBalancesText">Sort </span>
            <BsSortDown name="BsSortDown" size={15} color={"#805AD5"} />
          </button>
        </div>
        <button className="searchExchangeBtn">
          <AiOutlineSearch name="AiOutlineSearch" size={20} color={"#805AD5"} />
          <span className="hideBalancesText">Search your exchange</span>
          <span></span>
        </button>
      </div>
      <div className="metaContainer">
        <div className="metaContainerChild1">
          <FoxIcon />
          <span className="metamaskText">Metamask</span>
        </div>
        <div className="metaContainerChild2">
          <span className="redStat">4.85%</span>
          <SidebarStatistic1 />
          <FaPencilAlt name="FaPencilAlt" size={12} color={"#805AD5"} />
          <MdDelete name="MdDelete" size={15} color={"#805AD5"} />
        </div>
      </div>
      <div className="sidebarMidContainer">
        <div className="sidebarMidChild1">
          <div className="binanceCont">
            <div className="binanceIcText">
              <BinanceIcon />
              <span className="binanceSaves">Binance</span>
            </div>
            <span className="binanceSaves">$1000.00</span>
          </div>
          <div className="greenStat">
            <span className="greenStatText">4.85%</span>
            <GreenStat />
          </div>
        </div>
        <div className="line"></div>
        <div>
          <div className="binSavesContainer">
            <BinanceIcon />
            <span className="binanceSaves">Binance Savings</span>
          </div>
          <div className="binSavesContainer2">
            <BinanceIcon />
            <span className="binanceSaves">Binance Futures</span>
          </div>
        </div>
      </div>
      <div className="mapingContainer">
        {[0, 1, 2, 3].map(() => {
          return (
            <div className="mapChild">
              <div className="iconAndName">
                <CIcon />
                <span className="coinbase">Coinbase</span>
              </div>
              <div className="mapChild2">
                <span className="redStat">4.85%</span>
                <SidebarStatistic1 />
                <FaPencilAlt name="FaPencilAlt" size={12} color={"#805AD5"} />
                <MdDelete name="MdDelete" size={15} color={"#805AD5"} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SidebarTop;
