import styled from "styled-components";
export const CarrerNewsWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
  margin: 80px 0px;
`;
export const CarrerNewsSection = styled.div`
  max-width: ${({ theme }) => theme.maxWidthLayout.deskop.fullWidth};
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
`;
export const CarrerNewsHeading = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.005em;
  color: #141416;
`;
export const CarrerNewsListBlog = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  > div {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #d80027;
      label,
      p,
      span,
      h3,
      a {
        color: #ffffff;
      }
    }
  }

  > div:nth-child(2n) {
    label {
      color: #d80027;
    }
    &:hover {
      background: #41b6b7;
      label {
        color: #fff;
      }
    }
  }
`;
export const CarrerNewsLearnMore = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  width: 165px;
  height: 48px;
  border: 1px solid #b1b5c3;
  border-radius: 4px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.0125em;
  color: #141416;
  background: #ffffff;
  margin: auto;
  cursor: pointer;
  a {
    align-items: center;
    display: flex;
    gap: 8px;
    line-height: 1;
  }
  &:hover {
    background: #b1b5c3;
    a {
      color: #fff;
    }
  }
`;
