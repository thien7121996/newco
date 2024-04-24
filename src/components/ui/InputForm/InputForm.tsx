import { forwardRef, InputHTMLAttributes } from "react";
import styled from "styled-components";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  //
};

/** Input component */
export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <InputStyled {...props} ref={ref} />;
});

Input.displayName = "Input";

const InputStyled = styled.input`
	border: 1px solid ${({ theme }) => theme.colors.secondary_300};
	color: ${({ theme }) => theme.colors.secondary_500};
	border-radius: 8px;padding: 10px 14px;
	width: 100%;
	outline:none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 16px;

    height: 56px;

    border: 1px solid #E9E9E9;
    border-radius: 8px;;
    flex-grow: 0;
    z-index: 0;

}
`;
