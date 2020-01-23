import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

function Twitter({ tweetId }) {
  return (
    <div className="d-flex justify-content-center">
      <TwitterTweetEmbed tweetId={tweetId} />
    </div>
  );
}

export default Twitter;
