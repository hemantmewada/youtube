import React from "react";
import { Search } from "../../utils/icons";
import { useYT } from "../../context/yt";

const SearchSection = ({ focus, setFocus, handleSubmit }) => {
  const { searchedValue, setSearchedValue } = useYT();
  return (
    <div
      className={`search-bar hidden md:flex flex-row items-center justify-between border ${
        focus ? "border-[#1c62b9]" : "border-[#303030]"
      } py-1 rounded-full pl-2 w-1/3`}
    >
      <form className="contents" onSubmit={handleSubmit}>
        <div className="flex flex-row flex-grow items-center">
          <div className="dark:hidden block mr-1">
            <div className={`${focus ? "block" : "hidden"} ease-in-out`}>
              <Search fillColor={"#000"} />
            </div>
          </div>
          <div className="hidden dark:block mr-1">
            <div className={`${focus ? "block" : "hidden"} ease-in-out`}>
              <Search fillColor={"#fff"} />
            </div>
          </div>
          <input
            value={searchedValue}
            onChange={(e) => {
              setSearchedValue(e.target.value);
            }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            type="text"
            placeholder="Search"
            className="h-[30px] w-full bg-transparent outline-none text-gray-500"
          />
        </div>
        <button className="px-5 pt-[8px] pb-[5px] my-[-5px] bg-[#F2F2F2] dark:bg-[#272727] rounded-tr-full rounded-br-full">
          <div className="dark:hidden block">
            <Search fillColor={"#000"} />
          </div>
          <div className="hidden dark:block">
            <Search fillColor={"#fff"} />
          </div>
        </button>
      </form>
    </div>
  );
};

export default SearchSection;
