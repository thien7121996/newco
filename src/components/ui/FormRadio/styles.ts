import styled from "styled-components";

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const RadioButton = styled.input<{ disabled?: boolean }>`
  width: 24px;
  height: 24px;
  min-width: 24px;
  margin: 0;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  /* Styles for the inner circle (when checked) */
  &:checked {
    display: block;
    appearance: none;
    -webkit-appearance: none;
    background: ${({ theme }) => theme.colors.primary_800};
    border: 4px solid ${({ theme }) => theme.colors.primary_0};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary_800};
  }
`;

export const Label = styled.label<{ disabled?: boolean }>`
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.2px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;
  height: 24px;
  font-family: "Aeonik Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  letter-spacing: 0.0025em;
  color: #141416;
`;
