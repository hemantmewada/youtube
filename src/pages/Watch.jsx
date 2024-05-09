import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { fetchDataFromAPI } from "../config/api";
import Video from "../components/video/Video";
import RelatedContents from "../components/video/RelatedContents";

const Watch = () => {
  const { search } = useLocation();
  const videoId = search.split("=")[1];
  const [video, setVideo] = useState({});
  const [relatedContents, setRelatedContents] = useState([]);
  useEffect(() => {
    getDetail();
    getRelatedContents();
  }, [videoId]);

  const getDetail = async () => {
    const data = await fetchDataFromAPI(`video/details/?id=${videoId}`);
    setVideo(data);
  };
  const getRelatedContents = async () => {
    const data = await fetchDataFromAPI(
      `video/related-contents/?id=${videoId}`
    );
    setRelatedContents(data?.contents);
  };

  return (
    <div className="flex flex-col h-auto bg-white dark:bg-[#0F0F0F] text-[#0F0F0F] dark:text-white">
      <Header />
      <div className="flex flex-row h-[calc(100%-56px)] px-28 py-10 gap-6">
        <Video video={video} />
        <RelatedContents relatedContents={relatedContents} />
      </div>
    </div>
  );
};

export default Watch;
