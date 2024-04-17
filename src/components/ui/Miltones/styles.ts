import styled from "styled-components";
export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

export const MiltonesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 64px 0px;
  gap: 8px;
  width: 100%;
`;

export const MiltonesItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 72px;
`;

export const MiltonesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`;

export const MiltonesItemTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.0015em;
  color: #23262f;
`;
export const MiltonesItemContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.004em;

  color: #777e90;
`;
export const MiltoneTree = styled.div`
  display: flex;
  width: 28px;
  height: 112px;

  & img {
    object-fit: contain;
  }
`;
