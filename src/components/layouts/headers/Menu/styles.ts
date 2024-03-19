import styled from "styled-components";

export const MenuWrapper = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  justify-content: center;
`;

export const ItemMenu = styled.li`
  a {
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
  }
`;
