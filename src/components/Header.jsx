import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LogoSection from "./header/LogoSection";
import SearchSection from "./header/SearchSection";
import ProfileSection from "./header/ProfileSection";
import { useYT } from "../context/yt";
import { fetchDataFromAPI } from "../config/api";

const Header = () => {
  const navigate = useNavigate();

  const { searchedValue, setSearchedValue, setSearchedResults, setloading } =
    useYT();
  const navigateToHome = () => {
    navigate("/");
  };
  const [focus, setFocus] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchedValue) return false;
    navigate(`/results?search_query=${searchedValue}`);
    getSearchedData();
  };
  const getSearchedData = async () => {
    setloading(true);
    const res = await fetchDataFromAPI(
      `search/?hl=en&gl=US&q=${searchedValue}`
    );
    setSearchedResults(res?.contents);
    setloading(false);
  };
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const search_query = params.get("search_query");
  useEffect(() => {
    setSearchedValue(search_query);
    getSearchedData();
  }, [search_query]);
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5">
      <LogoSection navigateToHome={navigateToHome} />
      <SearchSection
        focus={focus}
        setFocus={setFocus}
        handleSubmit={handleSubmit}
      />
      <ProfileSection />
    </div>
  );
};

export default Header;
