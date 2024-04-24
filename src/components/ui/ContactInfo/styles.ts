import styled from "styled-components";

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

export const ContactInfoColumn = styled.div`
  width: 50%;
  & iframe {
    width: 100% !important;
  }
`;
export const ContactInfoHeading = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */
  letter-spacing: 0.0015em;
  color: #23262f;
`;

export const ContactInfoItem = styled.div`
  display: flex;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0px;

  & label {
    width: 40%;
    height: 24px;
    font-family: "Aeonik Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */
    letter-spacing: 0.004em;

    color: #777e90;
  }
  & span {
    font-family: "Aeonik Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */
    letter-spacing: 0.004em;
    width: 60%;
    color: #23262f;
  }
`;
export const ContactInfoList = styled.div`
  margin-top: 30px;
  gap: 16px;
  display: flex;
  flex-direction: column;
`;
