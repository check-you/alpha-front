import React from "react";
import { StyledButton } from "./styled";

const Button = ({ theme, onClick, children }) => {
  return (
    <StyledButton type="button" theme={theme} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
