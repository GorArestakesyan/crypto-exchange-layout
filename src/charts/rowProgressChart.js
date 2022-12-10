import React from 'react'
import DaysRow from '../body/daysRow'
import Row from './rowChart'
import { AiOutlineSync } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
function RowProgressChart() {
  return (
    <div className="chard4">
          <div className="chard4TopCont">
            <div className="gBox">
              <span className="G">G</span>
            </div>
            <div>
              <div>
                <AiOutlineSync
                  name="AiOutlineSync"
                  size={22}
                  color={"#805AD5"}
                  className="syncIcon"
                />
                <FaDollarSign name="FaDollarSign" size={22} color={"#805AD5"} className="dollarIcon" />
                <span className="syncNums">855,914.000</span>
              </div>
              <div>
                <span className="userName">Mr. Nick Peterson</span>
              </div>
            </div>
          </div>
          <div className="rowChardWrapper">
            <Row />
          </div>
          <div className="daysInRows">
            <DaysRow/>
          </div>
        </div>
  )
}

export default RowProgressChart