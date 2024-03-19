import styled from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const FooterWrapper = styled.div`
  display: block;
  max-width: 100vw;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 32px 0px;
  gap: 24px;
  background: ${({ theme }) => theme.colors.primary_800};

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    display: none;
  }
`;

export const FooterSection = styled.section`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidthLayout.deskop.fullWidth};
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 55px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const FooterMain = styled.div`
  display: flex;
  gap: 55px;
  width: 100%;
`;

export const FooterColumn = styled.div`
  flex: 1;
`;

export const FooterMainColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  margin: 0 auto;
  flex: none;
  order: 0;
  flex-grow: 1;
  flex: 0 0 30%;
  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.004em;
    color: ${({ theme }) => theme.colors.secondary_100};
  }
`;

export const HeadingFooter = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.0025em;
  color: ${({ theme }) => theme.colors.primary_0};
`;

export const Divided = styled.div`
  height: 0px;
  border: 1px solid ${({ theme }) => theme.colors.secondary_600};
  flex: none;
  width: 100%;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;

export const FooterSocial = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  margin: 0 auto;
  flex: none;
  order: 0;
  flex-grow: 1;
`;

export const FooterMenuBottom = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  margin: 0 auto;
  flex: none;
  order: 1;
  flex-grow: 0;

  > li {
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
`;

export const FooterCopyRight = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.0015em;
  color: ${({ theme }) => theme.colors.secondary_100};
  text-align: center;
  width: 100%;
`;
