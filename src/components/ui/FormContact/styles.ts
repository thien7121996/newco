import styled, { css } from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const AddNewAddressWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary_100};
  padding: 20px 20px 0 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  @media (max-width: ${MEDIA_QUERY.SMALL_LAPTOP}) {
    padding: 16px;
  }
`;

export const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
`;

export const RequireMessage = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const Wrapper = styled.div<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  width: 100%;
  #form-action {
    @media (min-width: 769px) and (max-width: 875px) {
      grid-template-columns: 1fr;
      max-height: fit-content;
    }
  }
`;

export const LabelRadio = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.secondary_500};
  margin-bottom: 6px;
`;

export const HalfWidthField = styled.div<{
  hide?: boolean;
  isNotFull?: boolean;
}>`
  display: flex;
  align-items: end;
  gap: 24px 32px;
  opacity: 1;
  visibility: visible;
  transition: 0.2s;
  align-items: flex-start;
  margin-bottom: 24px;
  ${({ hide }) =>
    hide &&
    css`
      max-height: 0px;
      margin-bottom: 0px;
      opacity: 0;
      visibility: hidden;
    `};

  @media (max-width: ${MEDIA_QUERY.MOBILE}) {
    margin-bottom: 16px;
    max-height: fit-content;
    row-gap: 16px;
    flex-direction: ${({ isNotFull }) => (isNotFull ? "row" : "column")};
    ${({ hide }) =>
      hide &&
      css`
        max-height: 0px;
        margin-bottom: 0px;
        opacity: 0;
        visibility: hidden;
      `};
  }
`;

export const FullWidthField = styled.div<{ hide?: boolean }>`
  width: 100%;
  opacity: 1;
  visibility: visible;
  transition: 0.2s;
  margin-bottom: 24px;

  ${({ hide }) =>
    hide &&
    css`
      margin-bottom: 0px;
      max-height: 0px;
      opacity: 0;
      visibility: hidden;
    `};

  @media (max-width: ${MEDIA_QUERY.MOBILE}) {
    margin-bottom: ${({ hide }) => (hide ? "0px" : "16px")};
  }
`;

export const PostCode = styled.div`
  width: 100%;

  @media (max-width: ${MEDIA_QUERY.MOBILE}) {
    margin-bottom: 2px;
  }
`;

export const AutoFillButton = styled.div<{
  active?: boolean;
}>`
  margin: 25px 0 5px 0;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary_600};
  width: 100%;
  gap: 9px;
  background: ${({ theme }) => theme.colors.secondary_400};
  padding: 9px 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary_600};
  border-radius: 60px;
  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.colors.primary_100};
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
    `}

  @media (max-width: ${MEDIA_QUERY.MOBILE}) {
    margin: 0 0 0 2px;
  }
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

export const ErrorRegister = styled.div`
  height: 16px;
  width: 100%;
  margin-bottom: 15px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.error};
`;

export const IconWrapper = styled.div<{ isRotate?: boolean }>`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ isRotate }) => (isRotate ? "rotate(180deg)" : null)};
`;

export const TextAreaCustom = styled.textarea`
  border-radius: 8px;
  resize: none;
  padding: 10px 14px;
  outline: none;
  width: 100%;
  border: none;
  background-color: #fff;
  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary_500};
  }
  border: 1px solid #e9e9e9 !important;
  height: 126px;
`;

export const NoteForm = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  letter-spacing: 0.0025em;

  color: #141416;
`;

export const ListRadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    flex-basis: 33% !important;
    margin-bottom: 10px;
  }
`;

export const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid #e9e9e9 !important;
  padding: 0px;
  padding: 10px 14px;
  border-radius: 10px;
`;
