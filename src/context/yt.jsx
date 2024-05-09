import { createContext, useContext, useEffect, useState } from "react";
import { fetchDataFromAPI } from "../config/api";

const YTContext = createContext();

export const YTProvider = ({ children }) => {
  const [loading, setloading] = useState(false);
  const [category, setCategory] = useState(null);
  const [results, setResults] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  return (
    <YTContext.Provider
      value={{
        loading,
        setloading,
        category,
        setCategory,
        results,
        setResults,
        searchedValue,
        setSearchedValue,
        searchedResults,
        setSearchedResults,
        categoryData,
        setCategoryData,
      }}
    >
      {children}
    </YTContext.Provider>
  );
};

export const useYT = () => {
  return useContext(YTContext);
};
