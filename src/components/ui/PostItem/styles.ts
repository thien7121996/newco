import styled from "styled-components";
export const PostItemWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
  padding: 16px;

  background: #ffffff;
  border: 1px solid #e9e9e9;
`;

export const PostItemTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.0015em;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PostItemThumbnail = styled.div`
  width: 100%;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PostItemSection = styled.div<{ type: "vertical" | "horizontal" }>`
  display: flex;
  ${({ type }) =>
    type === "vertical" ? "flex-direction: column;" : "flex-direction: row;"}

  padding: 0px;
  gap: 16px;
  ${({ type }) =>
    type === "vertical"
      ? `
    & ${PostItemThumbnail} {
        height: 376px;
    }`
      : `
    & ${PostItemThumbnail} {
        width: 224.5px;
        height: 130px;
    }`}
`;

export const PostItemDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.004em;
  color: #777e90;
`;

export const PostItemDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
export const DateText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  align-items: flex-end;
  letter-spacing: 0.004em;
  color: #777e90;
`;

export const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PostItemContentMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const PostItemLabel = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  /* identical to box height, or 100% */
  letter-spacing: 0.015em;
  text-transform: uppercase;
  color: #d80027;
`;
export const ButtonSeeMore = styled.button`
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.0125em;
  color: #141416;

  background: none;
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
  }
`;
