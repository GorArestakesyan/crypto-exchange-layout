import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdArrowDropup } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
function BottomTable() {
  return (
    <div className="statContainer">
      <div className="chardTitleWrapper">
        <span className="chard2Title">Holdings</span>
        <span className="chard2SeeMore">See more</span>
      </div>
      <div className="tableContainer">
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Total</th>
                <th>1 Hour Charge</th>
                <th>Market Cap</th>
                <th>Price in BTC</th>
                <th>Price Graph(7D)</th>
                <th>
                  <FiMenu name="FiMenu" size={24} color={"#ECECEC"} />
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {[1, 2, 3].map(() => {
                return (
                  <tr>
                    <td>
                      <div className="aaveWrapper">
                        <div className="aave"></div>
                        <span className="aaveText"> Aave Abat v2</span>
                      </div>
                    </td>
                    <td>99</td>
                    <td>$56.48</td>
                    <td className="greenPercent">
                      <IoMdArrowDropup
                        className="IoMdArrowDropup"
                        name="IoMdArrowDropup"
                        size={15}
                        color={"#34D35C"}
                      />
                      1.88%
                    </td>
                    <td>72.8B</td>
                    <td>9.12455558</td>
                    <td>
                      <div className="greenProgress" />
                    </td>
                    <td>
                      <BiDotsVerticalRounded
                        name="BiDotsVerticalRounded"
                        size={22}
                        className="dots"
                        color={"#fff"}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BottomTable;
