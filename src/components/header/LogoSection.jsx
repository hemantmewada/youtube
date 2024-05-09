import React from "react";
import { Logo, Menu } from "../../utils/icons";
import { useYT } from "../../context/yt";

const LogoSection = ({ navigateToHome }) => {
  const { mobileMenu, setMobileMenu } = useYT();
  const toggleSidebar = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <div className="flex flex-row gap-2 cursor-pointer items-center">
      <div
        className="dark:hidden block p-[7px] dark:hover:bg-[#272727] hover:bg-[#E5E5E5] rounded-full"
        onClick={toggleSidebar}
      >
        <Menu fillColor={"#000"} />
      </div>
      <div className="dark:hidden block" onClick={navigateToHome}>
        <Logo fillColor={"#000"} />
      </div>
      <div
        className="hidden dark:block p-[7px] dark:hover:bg-[#272727] hover:bg-[#E5E5E5] rounded-full"
        onClick={toggleSidebar}
      >
        <Menu fillColor={"#fff"} />
      </div>
      <div className="hidden dark:block" onClick={navigateToHome}>
        <Logo fillColor={"#fff"} />
      </div>
    </div>
  );
};

export default LogoSection;
