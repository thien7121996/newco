import styled, { css } from "styled-components";

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  user-select: none;
  opacity: 0;
  span {
    font-weight: 700;
  }
  & + label {
    user-select: none;
    position: relative;
    cursor: pointer;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.primary_800};
    display: flex;
    align-items: center;
  }
  & + label:before {
    content: "";
    margin-right: 16px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    min-width: 20px;
    background: white;
    border: 1.5px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    display: flex;
    align-items: center;
  }
  &:checked + label:before {
    background: ${({ theme }) => theme.colors.success};
    border: none;
  }
  &:checked + label:after {
    content: "";
    position: absolute;
    left: 7px;
    background: white;
    width: 2px;
    height: 2px;
    ${({ theme }) => css`
      box-shadow:
        2px 0 0 ${theme.colors.primary_0},
        4px 0 0 ${theme.colors.primary_0},
        4px -2px 0 ${theme.colors.primary_0},
        4px -4px 0 ${theme.colors.primary_0},
        4px -6px 0 ${theme.colors.primary_0},
        4px -8px 0 ${theme.colors.primary_0};
    `}
    transform: rotate(45deg);
  }
`;
