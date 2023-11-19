import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Button } from "../../components";
import {
  Container,
  Image,
  Wrapper,
  Wrapper2,
  WrapperInner,
  WrapperContent,
  BackgroundImage,
  NumWrapper,
  BackImage,
  NumImage,
} from "./styled";
import backIcon from "../../assets/images/backIcon.svg";
import design1 from "../../assets/images/design1.svg";
import first from "../../assets/images/firstChecked.svg";
import second from "../../assets/images/secondNocheck.svg";
import third from "../../assets/images/thirdNocheck.svg";
const SignupA = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (true) {
      navigate("/signupb");
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };
  return (
    <Container>
      <Wrapper>
        <BackImage src={backIcon} alt="돌아가기" />
        <Text theme="signupTitle">Sign Up</Text>
      </Wrapper>
      <WrapperContent>
        <Wrapper2>
          <Text theme="signupSubTitle"> 이메일 인증 </Text>
          <NumWrapper>
            <NumImage src={first} alt="1" />
            <NumImage src={second} alt="2" />
            <NumImage src={third} alt="3" />
          </NumWrapper>
        </Wrapper2>
        <BackgroundImage src={design1} alt="디자인" />

        <WrapperInner>
          <Text theme="signupContents1">조현진 고객님</Text>
          <Text theme="signupContents2">
            이메일로 본인 인증을 진행해주세요.
          </Text>
        </WrapperInner>
        <WrapperInner>
          <Button theme="submitBtn" onClick={handleSubmit}>
            이메일 보내기
          </Button>
        </WrapperInner>
      </WrapperContent>
    </Container>
  );
};

export default SignupA;
