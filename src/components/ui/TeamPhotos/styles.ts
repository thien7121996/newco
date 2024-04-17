import styled from "styled-components";
export const TeamPhotosWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
  background: #ffffff;
`;
export const TeamPhotosSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 16px;
`;

export const ItemPhoto = styled.div`
  width: 100%;
`;

export const TeamPhotosThumbnail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 20%;
  max-width: 200px;

  ${ItemPhoto} {
    & img {
      width: 100%;
      height: 194.67px;
      object-fit: cover;
    }
  }
`;

export const TeamPhotosMain = styled.div`
  width: 80%;
  ${ItemPhoto} {
    & img {
      width: 100%;
    }
  }
`;
