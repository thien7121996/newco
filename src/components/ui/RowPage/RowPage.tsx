import { FC } from "react";
import { RowPageSection, RowPageWrapper } from "./styles";
type Props = {
  children: React.ReactNode;
};
export const RowPage: FC<Props> = ({ children }) => {
  return (
    <RowPageWrapper>
      <RowPageSection>{children}</RowPageSection>
    </RowPageWrapper>
  );
};
RowPage.displayName = "RowPage";
