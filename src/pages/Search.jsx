import React from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import Feed from "../components/Feed";
import { useYT } from "../context/yt";

const Search = () => {
  const { searchedResults } = useYT();
  return (
    <>
      <Header />
      <div className="flex flex-row h-[calc(100%-56px)]">
        <LeftSideBar />
        <Feed results={searchedResults} />
      </div>
    </>
  );
};

export default Search;
