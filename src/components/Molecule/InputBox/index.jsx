import React from "react";
import { SignupWrapper, Image, SignUpInput } from "./styled";

const InputBox = ({ src, placeholder, onChange, inputvalue }) => {
  return (
    <SignupWrapper>
      <Image src={src} alt={src} />
      <SignUpInput
        placeholder={placeholder}
        onChange={onChange}
        value={inputvalue}
      />
    </SignupWrapper>
  );
};

export default InputBox;
