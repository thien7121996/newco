import styled from "styled-components";
export const NewItemWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
`;

export const NewItemSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 16px;

  img {
  }
`;

export const NewItemTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.0015em;
  color: ${({ theme }) => theme.colors.primary};
`;

export const NewItemThumbnail = styled.div`
  width: 100%;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NewItemDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.004em;
  color: #777e90;
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
