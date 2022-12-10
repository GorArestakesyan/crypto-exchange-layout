import React from 'react'
import Bar from '../body/Bar'

function BarChart() {
  return (
    <div className="chard2">
          <div className="chardTitleWrapper">
            <span className="chard2Title">Most usable exchanges</span>
            <span className="chard2SeeMore">See more</span>
          </div>
          <div className="barsContainer">
            <Bar
              progress={25}
              progressPercent={"25%"}
              progressName={"Gate.io"}
            />
            <Bar
              progress={76}
              progressPercent={"76%"}
              progressName={"Coinbase"}
            />
            <Bar
              progress={39}
              progressPercent={"39%"}
              progressName={"Binance"}
            />
            <Bar progress={52} progressPercent={"52%"} progressName={"Houbi"} />
          </div>
        </div>
  )
}

export default BarChart