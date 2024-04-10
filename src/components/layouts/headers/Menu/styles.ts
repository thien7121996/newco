import Link from "next/link";
import styled from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const MenuWrapper = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  justify-content: center;

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    flex-wrap: wrap;
    height: 100%;
    gap: 20px;
    padding: 24px 24px 2400px 40px;
    width: 100%;
  }
`;

export const ItemMenu = styled.li`
  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    flex: 1 1 100%;
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.0025em;

  color: ${({ theme }) => theme.colors.primary};
  :hover {
    color: ${({ theme }) => theme.colors.primary_400};
  }

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    font-family: "Aeonik Pro";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.0025em;
    text-transform: uppercase;
    color: #141416;
  }
`;
