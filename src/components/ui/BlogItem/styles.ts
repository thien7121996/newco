"use client";
import styled from "styled-components";

export const BlogItemSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px;
  gap: 16px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
`;
export const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  margin: 0 auto;
`;
export const BlogLabel = styled.label`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  color: #141416;
`;
export const BlogTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.0015em;
  color: #141416;
`;
export const BlogDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.004em;
  color: #777e90;
`;
export const BlogDate = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.004em;
  color: #777e90;
  span {
    margin-top: 5px;
  }
`;
export const BlogGap = styled.div`
  height: 145px;
`;
