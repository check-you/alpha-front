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
import first from "../../assets/images/firstNocheck.svg";
import second from "../../assets/images/secondNocheck.svg";
import third from "../../assets/images/thirdCheck.svg";
const SignupC = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (true) {
      // 수정: 비밀번호 확인
      // 실행할 코드 (예: 회원가입 요청)
      // axiosInstance.post("/auth/signup", {...})
      // .then(response => { ... })
      // .catch(error => { ... });
      navigate("/transaction");
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
          <Text theme="signupSubTitle"> 가입 완료 </Text>
          <NumWrapper>
            <NumImage src={first} alt="1" />
            <NumImage src={second} alt="2" />
            <NumImage src={third} alt="3" />
          </NumWrapper>
        </Wrapper2>
        <BackgroundImage src={design1} alt="디자인" />

        <WrapperInner>
          <Text theme="signupContents1">조현진 고객님</Text>
          <Text theme="signupContents2">가입이 완료되었습니다!</Text>
        </WrapperInner>
        <WrapperInner>
          <Button theme="submitBtn" onClick={handleSubmit}>
            내 계좌 관리하러 가기
          </Button>
        </WrapperInner>
      </WrapperContent>
    </Container>
  );
};

export default SignupC;
