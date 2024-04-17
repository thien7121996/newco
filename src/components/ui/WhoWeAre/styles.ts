import styled from "styled-components";

export const WhoWeAreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 64px 0px;
  gap: 64px;
`;

export const BlockImage = styled.div`
  width: 100%;
  & img {
    border-radius: 15px;
    object-fit: cover;
  }
`;
