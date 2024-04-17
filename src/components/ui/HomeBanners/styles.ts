"use client";
import styled from "styled-components";

export const HomeBannersWrapper = styled.div`
  position: relative;
`;

export const VectorWrapper = styled.div`
  position: absolute;
  top: calc(100% - 17px);
  right: 0px;
  display: flex;
  justify-content: flex-end;
  img {
    width: 98%;
  }
`;

export const BackgroundWrapper = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
