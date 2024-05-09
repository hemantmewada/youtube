import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { menus } from "../../utils/data";
import { toast } from "react-hot-toast";

const MenuItem = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const notImplement = [
    "/shorts",
    "/feed/subscriptions",
    "/channel/channel-id",
    "/feed/history",
    "/feed/playlists",
    "/playlist?list=WL",
    "/playlist?list=LL",
    "/feed/clips",
    "/account",
    "/reporthistory",
  ];
  const navigateTo = (url) => {
    if (notImplement.includes(url)) {
      toast.dismiss();
      return toast.error("This functionality not implemented yet !");
    }
    navigate(url);
  };
  const dividerIndexes = [2, 13, 20];
  return menus.map((menu, index) => {
    return (
      <>
        <div
          onClick={() => navigateTo(menu.url)}
          key={index}
          className={`flex flex-row items-center gap-3 ${
            pathname == menu.url && "dark:bg-[#272727] bg-[#F2F2F2]"
          } hover:dark:bg-[#272727] hover:bg-[#F2F2F2] p-2 rounded-lg cursor-pointer`}
        >
          {pathname == menu.url ? (
            <>
              <div className="dark:hidden block">{menu.lightIconActive}</div>
              <div className="hidden dark:block">{menu.darkIconActive}</div>
            </>
          ) : (
            <>
              <div className="dark:hidden block">{menu.lightIconDeActive}</div>
              <div className="hidden dark:block">{menu.darkIconDeActive}</div>
            </>
          )}
          <p className="mt-1 text-[14px]">{menu.title}</p>
        </div>
        {dividerIndexes.includes(index) && (
          <div className="my-2 bg-[#ffffff33] h-[1px]"></div>
        )}
      </>
    );
  });
};

export default MenuItem;
