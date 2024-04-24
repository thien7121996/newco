import { uniqueId } from "lodash";
import React, { FC, InputHTMLAttributes, useEffect, useState } from "react";
import { RadioWrapper, RadioButton, Label } from "./styles";

type Props = {
  label: string;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

/** Radio Component */
export const Radio: FC<Props> = ({ label, disabled, ...props }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(uniqueId());
  }, []);

  return (
    <RadioWrapper>
      <RadioButton type="radio" id={id} disabled={disabled} {...props} />
      <Label htmlFor={id} disabled={disabled}>
        {label}
      </Label>
    </RadioWrapper>
  );
};

Radio.displayName = "Radio";
