import React from 'react'
import { FaDollarSign } from "react-icons/fa";
import BinanceIcon from "../svg/binanceIcon";
function ListItem() {
  return (
    <div className="chard5">
          <div className="chardTitleWrapper">
            <span className="chard2Title">Analitics</span>
            <span className="chard2SeeMore">See more</span>
          </div>
          <div className="colContainer">
            <div className="colBox">
              <div className="colWrapper">
                <div className="change"></div>
                <span className="colTitles">Total Trade Cound</span>
                <span className="colTitles2">128</span>
              </div>
            </div>
            <div className="colBox">
              <div className="colWrapper">
                <div className="binancePurple"></div>
                <span className="colTitles">The Most Used Exchanges</span>
                <div>
                  <div className="binance">
                  <BinanceIcon/>
                  <span className="colTitles2">Binance</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="colBox">
              <div className="colWrapper">
                <div className="cards"></div>
                <span className="colTitles">Total Withdraw</span>
                <span className="priceInChard5">
                  <FaDollarSign name="FaDollarSign" size={16} color={"#fff"}/>
                  <span className="colTitles2">200</span>
                </span>
              </div>
            </div>
            <div className="colBox">
              <div className="colWrapper">
                <div className="fees"></div>
                <span className="colTitles">Total Fee Paid</span>
                <span className="priceInChard5">
                  <FaDollarSign name="FaDollarSign" size={16} color={'#fff'}/>
                  <span className="colTitles2">12</span>

                </span>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ListItem