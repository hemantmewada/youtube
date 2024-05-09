import React from "react";
import { Bell, Upload } from "../../utils/icons";

const ProfileSection = () => {
  return (
    <div className="flex flex-row gap-2 cursor-pointer items-center">
      <div className="dark:hidden block p-[7px] dark:hover:bg-[#272727] hover:bg-[#E5E5E5] rounded-full">
        <Upload fillColor={"#000"} />
      </div>
      <div className="hidden dark:block p-[7px] dark:hover:bg-[#272727] hover:bg-[#E5E5E5] rounded-full">
        <Upload fillColor={"#fff"} />
      </div>
      <div className="dark:hidden block p-[7px] dark:hover:bg-[#272727] hover:bg-[#E5E5E5] rounded-full">
        <Bell fillColor={"#000"} />
      </div>
      <div className="hidden dark:block p-[7px] dark:hover:bg-[#272727] hover:bg-[#E5E5E5] rounded-full">
        <Bell fillColor={"#fff"} />
      </div>
      <div className="rounded-full">
        <img
          className="w-8 rounded-full"
          src="https://yt3.ggpht.com/r0HtAxoXUhY4DYBLMuuHEXNXH50ldgYueei_wvq_YUG-gSd6RkdAzCcrE20fywJEKecYJ5Nx=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProfileSection;
