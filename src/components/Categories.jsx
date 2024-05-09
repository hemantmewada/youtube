import React from "react";
import { categories } from "../utils/data";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-row overflow-x-scroll category-scroll">
      {categories.map((category, index) => (
        <div
          onClick={() => setSelectedCategory(category)}
          className={`${
            selectedCategory == category
              ? "dark:bg-white dark:text-black"
              : "dark:bg-[#3F3F3F] dark:text-white"
          } text-[15px] mr-2 px-3 py-1 rounded-md cursor-pointer`}
          key={index}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
