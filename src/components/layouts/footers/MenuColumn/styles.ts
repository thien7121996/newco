import styled from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const ListMenuFooter = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  list-style: none;
`;

export const ItemMenu = styled.li`
  height: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.0025em;
  color: ${({ theme }) => theme.colors.secondary_600};
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  > a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.0025em;
    color: ${({ theme }) => theme.colors.secondary_100};
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    text-decoration: none;
  }
  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    text-align: center;
  }
`;
