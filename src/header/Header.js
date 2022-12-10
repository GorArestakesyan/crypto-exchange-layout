import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { BsChevronDown, BsFillSunFill } from "react-icons/bs";

import LogoSvg from "../svg/logoSvg";
import PricingIcon from "../svg/pricingIcon";
import PortfolioIcon from "../svg/portfolioIcon";
import FileIcon2 from "../svg/fileIcon2";
import FileIcon from "../svg/fileIcon";
import SettingsIcon from "../svg/settingsIcon";
function Header() {
  const headerItemsData = [
    {
      id: 1,
      text: "Home",
      icon: <MdHomeFilled name="MdHomeFilled" size={26} color={"#805AD5"} />,
      background: "linear-gradient(180deg, #A37DF9 0%, #7B5AC5 100%)",
      borderRadius: "10px",
    },
    {
      id: 2,
      text: "Portfolio",
      icon: <PortfolioIcon />,
      arrowDown: (
        <BsChevronDown
          name="BsChevronDown"
          size={12}
          color={"#fff"}
          style={{ marginLeft: "6px" }}
        />
      ),
    },
    {
      id: 3,
      text: "Pricing",
      icon: <PricingIcon />,
    },
    {
      id: 4,
      text: "Marketplace",
      icon: <FileIcon />,
    },
    {
      id: 5,
      text: "Futures",
      icon: <FileIcon2 />,
    },
    {
      id: 6,
      text: "Settings",
      icon: <SettingsIcon />,
      arrowDown: (
        <BsChevronDown
          name="BsChevronDown"
          size={12}
          color={"#fff"}
          style={{ marginLeft: "6px" }}
        />
      ),
    },
  ];
  return (
    <div className="headerContainer">
      <div>
        <LogoSvg />
      </div>
      <div className="headerLinkBox">
        {headerItemsData.map((elm) => {
          return (
            <div
              className="headerEachLink"
              style={{
                background: elm.background,
                borderRadius: elm.borderRadius ? elm.borderRadius : null,
              }}
            >
              <div style={{ marginRight: "6px" }}>{elm.icon}</div>
              <span className="headerLinkText">{elm.text}</span>
              <>{elm.arrowDown}</>
            </div>
          );
        })}
      </div>
      <div className="headerGbox">
        <div className="gWrapper">
          <span className="gHeader">G</span>
        </div>
        <BsFillSunFill name="BsFillSunFill" size={20} color={"#805AD5"} />
      </div>
    </div>
  );
}

export default Header;
