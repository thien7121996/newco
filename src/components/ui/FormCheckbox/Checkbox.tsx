import React, { FC, InputHTMLAttributes, useId } from "react";
import { CheckboxWrapper, CheckboxInput, Label } from "./styles";

type Props = {
  label?: string;
  children?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

/** Checkbox Component */
export const Checkbox: FC<Props> = ({ children, label, ...props }) => {
  const id = useId();

  return (
    <CheckboxWrapper>
      <CheckboxInput type="checkbox" id={id} {...props} />
      <Label htmlFor={id}>
        <span>{label}</span>
        {children}
      </Label>
    </CheckboxWrapper>
  );
};

Checkbox.displayName = "Checkbox";
