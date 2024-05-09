import React, { useState } from "react";
import VideoCard from "./VideoCard";
import Categories from "./Categories";
import { useYT } from "../context/yt";

const Feed = ({ results }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { loading } = useYT();
  return loading ? (
    <div className="flex items-center justify-center flex-1 w-[calc(100%-226px;)] h-full text-center">
      <img src="/icons/spinner.gif" width={50} alt="" />
    </div>
  ) : (
    <div className="flex-1 w-[calc(100%-226px;)] h-full">
      {/* <div className="p-5">
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div> */}
      <div className="grid grid-cols-1 ms:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 h-full overflow-y-scroll">
        {results?.map((result, index) => {
          return (
            result.type == "video" && <VideoCard key={index} {...result} />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
