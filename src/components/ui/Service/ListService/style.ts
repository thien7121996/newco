import styled from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";
export const ListServiceWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(99, 99, 99, 0.2);
  overflow: hidden;

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    box-shadow: unset;
  }
`;
export const ListServiceSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px;
  gap: 56px;
  overflow: hidden;

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    flex-wrap: wrap;
    gap: 32px;
    padding: 0px;
  }
`;
