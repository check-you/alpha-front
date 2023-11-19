import React, { useState } from "react";
import { Text, InputBox } from "../../components";
import { Container, DashBoard } from "./styled";
import bankIcon from "../../assets/images/bankIcon.svg";
const AddAccount = () => {
  const [temp, setTemp] = useState("");
  const ontempChange = (e) => {
    setTemp(e.target.value);
  };
  return (
    <Container>
      <InputBox
        src={bankIcon}
        contents="금융기관"
        onChange={ontempChange}
        inputvalue={temp}
      />
    </Container>
  );
};
export default AddAccount;
