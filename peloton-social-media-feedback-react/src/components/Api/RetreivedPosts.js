import React from "react";
import { useSelector } from "react-redux";
import Twitter from "../DisplayPosts/Twitter";
import Reddit from "../DisplayPosts/Reddit";
import Facebook from "../DisplayPosts/Facebook";
import EmptySearchResult from "../DisplayPosts/EmptySearchResult";
import styled from "styled-components";
import getSearchQuery from "./GetSearchQuery";
import { sendSearchQueryTwitter, sendSearchQueryReddit } from "./SendSearchQueryToApi";
import { SocialIcon } from "react-social-icons";

function reducer(prevState, { type, payload }) {
  let newPosts = [];
  switch (type) {
    case "RECEIVED_TWEETS":
      newPosts = [...prevState];
      newPosts.splice(0, newPosts.length, ...payload);
      return newPosts;
    case "RECEIVED_REDDIT_POSTS":
      newPosts = [...prevState];
      newPosts.splice(0, newPosts.length, ...payload);
      return newPosts;
    default:
      return prevState;
  }
}

function RetreiveAPI(props) {
  const [receivedPosts, receivedPostsDispatch] = React.useReducer(reducer, [""]);
  const { selectedProduct, selectedSocialMedia, searchTerm } = useSelector(appState => appState);

  const getTweets = async searchParameter => {
    sendSearchQueryTwitter(searchParameter);
    const response = await fetch("/twitter");
    const incomingData = await response.json();
    receivedPostsDispatch({ type: "RECEIVED_TWEETS", payload: incomingData.statuses });
  };

  const getRedditPost = async searchParameter => {
    let redditPosts = [];
    sendSearchQueryReddit(searchParameter);
    const response = await fetch("/reddit");
    const incomingData = await response.json();
    incomingData.map(post => {
      return redditPosts.push({
        title: post.title,
        text: post.selftext,
        author: post.author,
        createdTime: post.created_utc,
        url: post.permalink
      });
    });
    receivedPostsDispatch({ type: "RECEIVED_REDDIT_POSTS", payload: redditPosts });
  };

  React.useEffect(() => {
    let searchQuery = getSearchQuery(selectedSocialMedia, selectedProduct, searchTerm);
    if (selectedSocialMedia === "twitter") getTweets(searchQuery);
    if (selectedSocialMedia === "reddit") getRedditPost(searchQuery);
  }, [selectedProduct]);

  const memberPosts = () => {
    if (receivedPosts.length > 0) {
      switch (selectedSocialMedia) {
        case "twitter":
          return receivedPosts.map(receivedPost => <Twitter tweetId={receivedPost.id_str} key={receivedPost.id} />);
        case "reddit":
          return receivedPosts.map((receivedPost, index) => <Reddit post={receivedPost} />);
        case "facebook":
          return <Facebook />;
        default: //ToDo: add oops page
      }
    } else return <EmptySearchResult />;
  };

  return (
    <div>
      <ResultsHeader>
        Showing <SocialIcon network={selectedSocialMedia} style={{ height: 35, width: 35 }} fgColor="white" /> posts for{" "}
        {props.match.params.product}
      </ResultsHeader>
      <div>
        <PostContainer>{memberPosts()}</PostContainer>
      </div>
    </div>
  );
}

const PostContainer = styled.div`
  list-style-type: none;
  margin-left: 70px;
  margin-right: 70px;
`;

const ResultsHeader = styled.h4`
  text-align: center;
  margin-bottom: 30px;
`;

export default RetreiveAPI;
