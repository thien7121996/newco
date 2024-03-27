import styled from "styled-components";

export const PartnerWrapper = styled.div`
  padding: 24px;
  gap: 56px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);

  .swiper-wrapper {
    transition-timing-function: linear;
  }
`;

export const Text = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  /* Body/Body regular normal */
  font-family: "Aeonik Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  text-align: center;
  letter-spacing: 0.0025em;

  /* Neutrals/01 */
  color: #141416;
`;
