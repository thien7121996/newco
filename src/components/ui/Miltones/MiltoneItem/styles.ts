import styled from "styled-components";

export const MiltonesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 40%;
`;

export const MiltonesItemTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.0015em;
  color: #23262f;
`;
export const MiltonesItemContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.004em;

  color: #777e90;
`;
export const MiltoneTree = styled.div`
  display: flex;
  width: 10%;
  height: 112px;

  & img {
    width: 28px;
    object-fit: contain;
  }
`;
export const MiltoneGap = styled.div`
  width: 40%;
`;
export const MiltoneItemSection = styled.div`
  max-width: 908px;
  width: 908px;
  margin: 0 auto;
`;
export const MiltonesItemWrapper = styled.div<{ align: "left" | "right" }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 72px;
  ${MiltoneGap} {
    order: 2;
  }
  ${MiltonesContent} {
    order: 0;
  }
  ${MiltoneTree} {
    order: 1;
  }
  ${({ align }) => {
    if (align === "right") {
      return `
      ${MiltoneGap} {
        order: 0;
      }
        ${MiltonesContent} {
          order: 2;
        }
        ${MiltoneTree} {
            order: 1;
        }
      `;
    }
  }}
`;
