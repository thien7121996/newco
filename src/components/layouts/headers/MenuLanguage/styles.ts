import styled from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const ButtonWrapper = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  padding-left: 16px;
  gap: 8px;
  height: 28px;
  flex: none;
  order: 0;
  flex-grow: 0;
  border-left: 1px solid #e0e0e0;

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    border: none;
  }
`;
