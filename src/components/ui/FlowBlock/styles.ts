import styled from "styled-components";
import VectorFlow from "@/styles/assets/hover-flow.png";
export const FlowBlockSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  gap: 32px;
`;
export const FlowNumber = styled.div``;
export const FlowNumberText = styled.h4`
  width: 60px;
  height: 48px;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;
  color: #b1b5c3;
  transition: all 0.3s ease-in-out;
`;
export const FlowContent = styled.div`
  transition: all 0.3s ease-in-out;
`;
export const FlowBlockTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.0015em;
  color: #777e90;
  transition: all 0.3s ease-in-out;
`;
export const FlowBlockContent = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.0025em;
  color: #b1b5c3;
`;

export const FlowBlockWrapper = styled.div`
  display: block;
  width: 100%;
  background: #f9f9f9;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  :: after {
    content: "";
    position: relative;
    display: block;
    height: 100%;
    background-size: contain;
    z-index: -1;
    top: -5px;
    left: 0;
    transition: all 1.3s ease-in-out;
  }
  :hover {
    background: #ffffff;
    ::after {
      content: "";
      background: url(${VectorFlow.src}) no-repeat;
      background-size: contain;
    }
    box-shadow: 0px 2px 8px rgba(99, 99, 99, 0.2);
    ${FlowBlockTitle} {
      color: #141416;
    }
    ${FlowBlockContent} {
      color: #141416;
    }
    ${FlowNumberText} {
      color: #141416;
    }
  }
`;
