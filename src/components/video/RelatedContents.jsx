import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { Verified } from "../../utils/icons";
import { Link } from "react-router-dom";
import { videoLength } from "../../helpers/Helper";

const RelatedContents = ({ relatedContents }) => {
  const headingStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
  };
  // console.log(relatedContents);
  return (
    <div className="w-[400px]">
      {relatedContents.map((relatedContent, index) => {
        return (
          relatedContent?.type == "video" && (
            <Link to={`/watch?v=${relatedContent?.video?.videoId}`}>
              <div className="flex flex-row gap-2 mb-4">
                <div className="relative w-1/2">
                  <img
                    src={
                      relatedContent?.video?.thumbnails[
                        relatedContent?.video?.thumbnails?.length - 1
                      ]?.url
                    }
                    width="100%"
                    alt={relatedContent?.video?.title}
                    className="rounded-md object-cover"
                  />
                  <p className="absolute bottom-2 right-2 bg-[#00000099] text-white rounded-md px-2 py-[1px] text-[13px]">
                    {videoLength(relatedContent?.video?.lengthSeconds)}
                  </p>
                </div>
                <div className="w-1/2">
                  <h1
                    className="overflow-hidden overflow-ellipsis line-clamp-2 font-semibold text-sm"
                    style={headingStyle}
                  >
                    {relatedContent?.video?.title}
                  </h1>
                  <p className="font-medium  flex flex-row gap-1 text-sm text-[#aaa]">
                    {relatedContent?.video?.author?.title}
                    {relatedContent?.video?.author?.badges[0]?.type ==
                      "VERIFIED_CHANNEL" && <Verified />}
                  </p>
                  <p className="text-sm text-[#aaa]">
                    {relatedContent?.video?.stats?.views != null &&
                      `${abbreviateNumber(
                        relatedContent?.video?.stats?.views,
                        2
                      )} views · ${relatedContent?.video?.publishedTimeText}`}
                  </p>
                </div>
              </div>
            </Link>
          )
        );
      })}
    </div>
  );
};

export default RelatedContents;
