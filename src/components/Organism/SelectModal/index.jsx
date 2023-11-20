import React from "react";
import { Container, Image, TextWrapper, BtnWrapper } from "./styled";
import { Text, Button } from "../../../components";
import alertIcon from "../../../assets/images/alertIcon.svg";

const SelectModal = ({ closeHandler, okHandler, children, btnContent }) => {
  return (
    <Container>
      <Image src={alertIcon} alt="주의!" />
      <TextWrapper>
        <Text theme="accountCorp">{children}</Text>
      </TextWrapper>
      <BtnWrapper>
        <Button theme="loginBtnAlert" onClick={okHandler}>
          {btnContent}
        </Button>
        <Button theme="closeBtnAlert" onClick={closeHandler}>
          닫기
        </Button>
      </BtnWrapper>
    </Container>
  );
};
export default SelectModal;
