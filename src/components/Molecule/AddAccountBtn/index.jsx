import React from "react";
import { Container, LogoImage } from "./styled";
import { Text } from "../..";
import addbtn from "../../../assets/images/addBtn.svg";
const AddAccount = ({ theme, onClick, children }) => {
  return (
    <Container onClick={onClick}>
      <LogoImage src={addbtn} alt="계좌추가" />
      <Text theme="accountAddBtn">계좌 연결 추가하기</Text>
    </Container>
  );
};

export default AddAccount;
