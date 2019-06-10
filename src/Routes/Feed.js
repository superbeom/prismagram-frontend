import React from "react";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import { gql } from "apollo-boost";
import Loader from "../Components/Loader";

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
`;

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);

  return <Wrapper>{loading && <Loader />}</Wrapper>;
};
