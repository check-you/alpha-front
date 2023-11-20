import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Button, BackAppBar } from "../../components";
import {
  Container,
  Wrapper2,
  WrapperInner,
  WrapperContent,
  BackgroundImage,
  NumWrapper,
  NumImage,
} from "./styled";
import design1 from "../../assets/images/design1.svg";
import first from "../../assets/images/firstNocheck.svg";
import second from "../../assets/images/secondNocheck.svg";
import third from "../../assets/images/thirdCheck.svg";
const SignupB = () => {
  const navigate = useNavigate();
  const [isEmailSubmit, setIsEmailSubmit] = useState(false);
  const [isAuthComplete, setIsAuthComplete] = useState(false);

  useEffect(() => {
    fetchAuthStatus(); // API를 통해 인증 상태를 가져오는 함수 호출
  }, []);
  const fetchAuthStatus = async () => {
    try {
      // API를 통해 isAuthComplete 값을 가져옴 (예시: fetch, axios 등을 사용)
      const response = await fetch("API_URL_HERE");
      const data = await response.json();
      setIsAuthComplete(data.isAuthComplete); // API에서 받아온 값으로 isAuthComplete 상태 설정
    } catch (error) {
      console.error("Error fetching authentication status:", error);
    }
  };

  const emailSubmitClick = () => {
    setIsEmailSubmit(true); // 이메일 보내기 버튼 클릭 시 isEmailSubmit 값을 true로 변경
  };
  const handleAuthButtonClick = () => {
    if (isAuthComplete) {
      navigate("/signupc"); // isAuthComplete 값이 true일 때만 navigate가 작동
    } else {
      alert("이메일 인증을 완료해주세요.");
    }
  };
  return (
    <Container>
      <BackAppBar label="회원가입" />
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
          {isEmailSubmit ? (
            <Button theme="submitBtn" onClick={handleAuthButtonClick}>
              이메일 인증 완료
            </Button>
          ) : (
            <Button theme="submitBtn" onClick={emailSubmitClick}>
              이메일 보내기
            </Button>
          )}
        </WrapperInner>
      </WrapperContent>
    </Container>
  );
};

export default SignupB;
