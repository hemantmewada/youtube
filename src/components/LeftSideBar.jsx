import React from "react";
import MenuItem from "./sidebar/MenuItem";

const LeftSideBar = () => {
  return (
    <div className="hidden w-[226px] md:block pl-4 pr-6 p-4 overflow-y-auto left-sidebar">
      <MenuItem />
    </div>
  );
};

export default LeftSideBar;
