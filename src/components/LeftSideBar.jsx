import React from "react";
import MenuItem from "./sidebar/MenuItem";
import { useYT } from "../context/yt";

const LeftSideBar = () => {
  const { mobileMenu } = useYT();
  return (
    // <div className="hidden w-[226px] md:block pl-4 pr-6 p-4 overflow-y-auto left-sidebar">
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all left-sidebar ${
        mobileMenu && "translate-x-0"
      }`}
    >
      <MenuItem />
    </div>
  );
};

export default LeftSideBar;
