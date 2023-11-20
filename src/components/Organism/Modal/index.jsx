import React from "react";
import { Container, Image, TextWrapper, TrashWrapper } from "./styled";
import { Text, Button } from "../../../components";
import smlieFace from "../../../assets/images/smileFace.svg";
const Modal = ({ theme, clickHandler, children }) => {
  return (
    <Container>
      <Image src={smlieFace} alt="웃는 얼굴" />
      <TextWrapper>
        <Text theme="accountCorp">{children}</Text>
      </TextWrapper>
      <TrashWrapper>
        <Button theme="closeBtn" onClick={clickHandler}>
          닫기
        </Button>
      </TrashWrapper>
    </Container>
  );
};

export default Modal;
