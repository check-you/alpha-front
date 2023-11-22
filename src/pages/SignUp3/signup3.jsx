import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { signUpDataAtom } from "../../store/atoms";
import { axiosInstance } from "../../apis";
import { Text, Button, BackAppBar, AlertOneBtnModal } from "../../components";
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
  const getSignupData = useRecoilValue(signUpDataAtom);
  const [isEmailSubmit, setIsEmailSubmit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    console.log(getSignupData.name);
  }, []);
  const openModal = async () => {
    setIsModalOpen(true);
  };
  const closeModal = async () => {
    setIsModalOpen(false);
  };

  const onSignUp = async () => {
    axiosInstance
      .post("/api/user/signIn", {
        name: getSignupData.name,
        phoneNumber: getSignupData.phoneNumber,
        email: getSignupData.email,
        password: getSignupData.password,
      })
      .then((response) => {
        console.log("로그인 요청이 완료되었습니다. ");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const isEmailAuthCom = async () => {
    console.log("이메일 인증 확인 요청 보냄");
    axiosInstance
      .post("/api/user/confirm/auth", {
        email: getSignupData.email,
      })
      .then((response) => {
        if (response.data.data == true) {
          console.log(response.data.data, "성공 응답");
          console.log(response.data, "응답 데이터");
          navigate("/signup4");
        } else {
          console.log(response.data.data, "실패 응답");

          openModal();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const emailSubmitClick = () => {
    onSignUp();
    setIsEmailSubmit(true); // 이메일 보내기 버튼 클릭 시 isEmailSubmit 값을 true로 변경
  };
  const handleAuthButtonClick = () => {
    isEmailAuthCom();
  };
  return (
    <Container>
      {isModalOpen && (
        <AlertOneBtnModal closeHandler={closeModal}>
          이메일 인증이 완료되지 않았습니다
        </AlertOneBtnModal>
      )}
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
          <Text theme="signupContents1">{getSignupData.name} 고객님</Text>
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
