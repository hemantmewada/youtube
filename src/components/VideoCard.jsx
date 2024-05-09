import React from "react";
import { Verified } from "../utils/icons";
import { videoLength } from "../helpers/Helper";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  // console.log(data);
  const headingStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
  };
  return (
    <Link to={`/watch?v=${video?.videoId}`}>
      <div className="flex flex-col">
        <div className="relative">
          <img
            src={video?.thumbnails[video?.thumbnails?.length - 1]?.url}
            alt={video?.title}
            className="rounded-md"
          />
          <p className="absolute bottom-2 right-2 bg-[#00000099] text-white rounded-md px-2 py-[1px] text-[13px]">
            {videoLength(video?.lengthSeconds)}
          </p>
        </div>
        <div className="flex flex-row gap-2 mt-2">
          <div>
            <img
              width={48}
              height={48}
              src={
                video?.author?.avatar[video?.author?.avatar?.length - 1]?.url
              }
              alt="profile image"
              className="rounded-full"
            />
          </div>
          <div className="w-fit">
            <h1
              className="overflow-hidden overflow-ellipsis line-clamp-2"
              style={headingStyle}
            >
              {video?.title}
            </h1>
            <p className="font-medium  flex flex-row gap-1 text-sm text-[#aaa]">
              {video?.author?.title}
              {video?.author?.badges[0]?.type == "VERIFIED_CHANNEL" && (
                <Verified />
              )}
            </p>
            <p className="text-sm text-[#aaa]">
              {video?.stats?.views != null &&
                `${abbreviateNumber(video?.stats?.views, 2)} views · ${
                  video?.publishedTimeText
                }`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
