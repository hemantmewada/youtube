import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import Feed from "../components/Feed";
import { useYT } from "../context/yt";
import { fetchDataFromAPI } from "../config/api";

const Home = () => {
  const { setloading, category, setCategory } = useYT();
  const [results, setResults] = useState([]);
  useEffect(() => {
    setCategory("New");
    if (category != null) fetchData();
  }, [category]);

  const fetchData = async () => {
    setloading(true);
    const { contents } = await fetchDataFromAPI(
      `search/?hl=en&gl=US&q=${category}`
    );
    // console.log(contents);
    setloading(false);
    setResults(contents);
  };

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

export default Home;
