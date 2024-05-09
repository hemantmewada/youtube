import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import Feed from "../components/Feed";
import { useYT } from "../context/yt";
import { useLocation } from "react-router-dom";
import { fetchDataFromAPI } from "../config/api";

const Others = () => {
  const { pathname } = useLocation();
  const { setloading, category } = useYT();
  const [results, setResults] = useState([]);

  const getCategoryData = async (value) => {
    setloading(true);
    const res = await fetchDataFromAPI(`search/?hl=en&gl=US&q=${value}`);
    setResults(res?.contents);
    setloading(false);
  };

  useEffect(() => {
    const arr = pathname.split("/");
    const value = arr[arr.length - 1];
    if (value) getCategoryData(value);
  }, [pathname, category]);

  return (
    <>
      <Header />
      <div className="flex flex-row h-[calc(100%-56px)]">
        <LeftSideBar />
        <Feed results={results} />
      </div>
    </>
  );
};

export default Others;
