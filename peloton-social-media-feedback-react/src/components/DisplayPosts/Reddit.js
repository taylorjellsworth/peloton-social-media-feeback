import React from "react";
import styled from "styled-components";

function Reddit({ post }) {
  const url = `https://www.reddit.com${post.url}`;
  return (
    <PostContainer>
      <a href={url} className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{post.title}</h5>
          <small class="text-muted">
            Posted by {post.author} at {post.createdTime}
          </small>
        </div>
        <p className="mb-1">{post.text}</p>
      </a>
    </PostContainer>
  );
}

const PostContainer = styled.div`
  margin-bottom: 10px;
  margin-left: 100px;
  margin-right: 100px;
  word-wrap: break-word;
`;

export default Reddit;
