import styled from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";
export const FlowOfUsWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
  margin: 140px 0px;
`;
export const FlowOfUsSection = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidthLayout.deskop.fullWidth};
  width: 95%;
  margin: auto;
  gap: 55px;
  @media (max-width: ${MEDIA_QUERY.EXTRA_DESKTOP}) {
    flex-direction: column;
  }
`;
export const FlowOfUsNumberList = styled.div`
  width: 70%;
  max-width: 808px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: ${MEDIA_QUERY.EXTRA_DESKTOP}) {
    width: 100%;
    order: 1;
  }
`;
export const FlowOfUsContent = styled.div`
  width: 28%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  @media (max-width: ${MEDIA_QUERY.EXTRA_DESKTOP}) {
    width: 100%;
    order: 0;
  }
`;
export const FlowSubTitle = styled.h4`
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
export const FlowTitle = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  color: #141416;
`;
export const FlowDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.004em;
  color: #777e90;
`;
export const FlowButton = styled.button`
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
`;
