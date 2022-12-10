import React from "react";
import SidebarBottom from "./SidebarBottom";

import SidebarTop from "./SidebarTop";
function SideBar() {
  return (
    <div className="sidebarContainer">
      <SidebarTop />
      <div
        className="bottomSidebarWrapper"
      >
        <SidebarBottom />
      </div>
    </div>
  );
}

export default SideBar;
