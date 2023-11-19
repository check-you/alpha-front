import React from "react";
import { Container, LogoImage } from "./styled";
import { Text } from "../../../components";
import shinhanLogo from "../../../assets/images/shinhanLogo.svg";
import deletbtn from "../../../assets/images/trash.svg";
const LinkedAccount = ({ theme, onClick, children }) => {
  return (
    <Container>
      <LogoImage src={shinhanLogo} alt="프로필 이미지 " />
      <Text theme="accountCorp">신한투자금융</Text>
      <Text theme="accountNum"> 1234-567-78944 </Text>
      <LogoImage src={deletbtn} alt="삭제 버튼 " />
    </Container>
  );
};

export default LinkedAccount;
