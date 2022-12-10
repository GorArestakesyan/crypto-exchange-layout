import React from "react";

function SidebarBottom() {
  return (
    <div className="sideBottomContainer">
    <div className="sliderBottom">
      <span className="freeTrailText">
        Your free trial has been started․ There are 
      </span>
      <span className="daysLeft">5 days left.</span>
      <button className="subscribeBtn"><span className="subscribeText">Subscribe</span></button>
    </div>
    <form className="close">
      <span className="closeText">X</span>
    </form>
    </div>
  );
}

export default SidebarBottom;
