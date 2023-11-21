import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { signUpDataAtom } from "../../store/atoms";
import { Text, Button, BackAppBar } from "../../components";
import {
  Container,
  Wrapper2,
  WrapperInner,
  WrapperContent,
  BackgroundImage,
  NumWrapper,
  Image,
} from "./styled";
import design1 from "../../assets/images/design1.svg";

import face from "../../assets/images/signupComplete.svg";

const SignupC = () => {
  const getUserData = useRecoilValue(signUpDataAtom);
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/signin");
  };
  return (
    <Container>
      <BackAppBar label="회원가입" />
      <WrapperContent>
        <Wrapper2>
          <Text theme="signupSubTitle"> 가입 완료 </Text>
        </Wrapper2>
        <BackgroundImage src={design1} alt="디자인" />

        <WrapperInner>
          <Image src={face} alt="completes"></Image>
          <Text theme="signupContents1">{getUserData.name}조현진 고객님</Text>
          <Text theme="signupContents2">가입이 완료되었습니다!</Text>
        </WrapperInner>
        <WrapperInner>
          <Button theme="submitBtn" onClick={handleSubmit}>
            로그인하러가기
          </Button>
        </WrapperInner>
      </WrapperContent>
    </Container>
  );
};

export default SignupC;
