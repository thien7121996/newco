import styled from "styled-components";

export const Label = styled.span<{ hideLabel?: boolean }>`
  display: ${({ hideLabel }) => (hideLabel ? "none" : "inline")};
  color: #141416;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  padding-bottom: 6px;
  min-height: 25px; // Line height + padding bottom: ;
  padding: 0px 3px;
  height: 24px;
  background: #ffffff;
  font-family: "Aeonik Pro";
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.004em;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.error};
  letter-spacing: -0.1px;
  margin-top: 2px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
