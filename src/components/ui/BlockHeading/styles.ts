"use client";
import styled from "styled-components";
export const BlockHeadingSubTitle = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  color: #d80027;
`;
export const BlockHeadingTitle = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  color: #141416;
`;
export const BlockHeadingDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.004em;
  color: #777e90;

  & p {
    color: #000;
  }
`;
export const BlockHeadingButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  gap: 8px;
  margin-right: auto;
  margin-left: 0px;
  width: 156px;
  height: 32px;
  border: 1px solid #b1b5c3;
  border-radius: 4px;
  background: #ffffff;
  color: #141416;
  font-weight: 700;
  cursor: pointer;
`;

export const BlockHeadingContent = styled.div<{
  align?: "center" | "left" | "right";
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  ${({ align }) => {
    if (align === "center") {
      return `
        align-items: center;
        text-align: center;
      `;
    }

    if (align === "right") {
      return `
        align-items: flex-end;
        text-align: right;
      `;
    }

    if (align === "left") {
      return `
        align-items: flex-start;
        text-align: left;
      `;
    }
  }}
`;
