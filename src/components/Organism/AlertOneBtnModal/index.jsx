import React from "react";
import { Container, Image, TextWrapper, BtnWrapper } from "./styled";
import { Text, Button } from "../../../components";
import alertIcon from "../../../assets/images/alertIcon.svg";

const AlertOneBtnModal = ({ closeHandler, children }) => {
  return (
    <Container>
      <Image src={alertIcon} alt="주의!" />
      <TextWrapper>
        <Text theme="accountCorp">{children}</Text>
      </TextWrapper>
      <BtnWrapper>
        <Button theme="closeBtn" onClick={closeHandler}>
          닫기
        </Button>
      </BtnWrapper>
    </Container>
  );
};

export default AlertOneBtnModal;
