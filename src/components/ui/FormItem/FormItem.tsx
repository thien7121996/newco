import { FC, HTMLAttributes } from "react";
import { Label, InputWrapper, ErrorMessage } from "./styles";
import { INPUT_LABEL_CLASS } from "@/contants/layout";
import { katakanaHalfwidthToFullwidth } from "@/utils/katakanaHalfwidthToFullwidth";

type Props = {
  label?: string;
  error?: string;
  prefix?: string;
  required?: boolean;
  children: React.ReactNode;
  hideLabel?: boolean;
} & HTMLAttributes<HTMLDivElement>;

/** FormItem component */
export const FormItem: FC<Props> = ({
  label,
  error,
  prefix,
  required,
  children,
  hideLabel = false,
  ...props
}) => {
  return (
    <InputWrapper {...props}>
      <Label className={INPUT_LABEL_CLASS} hideLabel={hideLabel}>
        {prefix}
        {label && katakanaHalfwidthToFullwidth(label)}
        {required && <span>*</span>}
      </Label>
      {children}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

FormItem.displayName = "FormItem";
