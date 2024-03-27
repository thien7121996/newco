import styled from "styled-components";

export const CustomNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const NavItemsWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const NavItemWrapper = styled.div<{
  $ratio: number;
  $isActive: boolean;
  $isCursor: boolean;
  $paddingPerItem: number;
}>`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: ${({ $ratio, $paddingPerItem }) =>
    `calc(${$ratio}% - ${$paddingPerItem}px )`};
  /* Frame 280 */

  cursor: ${({ $isCursor }) => ($isCursor ? "pointer" : "default")};
  color: ${({ $isActive }) => ($isActive ? "#FFFFFF" : "#B1B5C3")};
  transition: all ease-out 0.2s;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  /* Inside auto layout */
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const ScrollbarWrapper = styled.div`
  position: relative;
  /* Rectangle 35 */

  width: calc(100% - 80px);
  height: 4px;

  background: #777e90;
  opacity: 0.32;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const Track = styled.div<{
  $ratio: number;
  $translateX: number;
}>`
  position: absolute;

  /* Rectangle 35 */
  transition: all ease-in-out 0.75s;
  width: ${({ $ratio }) => `calc(${$ratio}% )`};
  transform: translateX(${({ $translateX }) => `${$translateX}%`});
  height: 4px;
  background: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const IndexWrapper = styled.div<{ $isShow: boolean }>`
  /* Frame 279 */
  position: relative;
  top: -3px;
  transition: all ease-in-out 0.2s;
  opacity: ${({ $isShow }) => ($isShow ? 1 : 0)};

  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 10px;
  gap: 10px; */

  width: 24px;
  height: 24px;

  background: #d80027;
  border-radius: 999px;

  /* Inside auto layout */
  order: 0;
  flex-grow: 0;
`;

export const NavText = styled.div`
  /* Frame 280 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  height: 24px;

  /* Inside auto layout */
  order: 0;
  flex-grow: 0;
`;
