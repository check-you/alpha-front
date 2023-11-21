import React, { useState, useEffect } from "react";
// 회원가입 데이터 저장할 리코일 임포트하기
import { useSetRecoilState, useRecoilValue } from "recoil";
import { signUpDataAtom } from "../../store/atoms";
import { axiosInstance } from "../../apis";
import { useNavigate } from "react-router-dom";
import { Text, Button, BackAppBar } from "../../components";
import {
  Container,
  Image,
  Wrapper2,
  WrapperInput,
  SignupWrapper,
  SignUpInput,
  BackgroundImage,
  NumWrapper,
  WrapperInputOut,
  NumImage,
} from "./styled";
import signupEmail from "../../assets/images/SignupEmail.svg";
import signupUser from "../../assets/images/signupUser.svg";
import signupPhone from "../../assets/images/signupPhone.svg";
import signupPwd from "../../assets/images/signupPwd.svg";
import design1 from "../../assets/images/design1.svg";
import first from "../../assets/images/firstChecked.svg";
import second from "../../assets/images/secondNocheck.svg";
import third from "../../assets/images/thirdNocheck.svg";

const Signup = () => {
  const setterSignupData = useSetRecoilState(signUpDataAtom);
  const settingComSignupData = useRecoilValue(signUpDataAtom);
  const [userEmail, setuserEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState(""); // 추가: 비밀번호 확인을 위한 상태값
  const [userName, setUserName] = useState("");
  const [userPhone, SetUserPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const navigate = useNavigate();

  const isButtonDisabled =
    pw !== pwConfirm ||
    pw === "" ||
    userEmail === "" ||
    userName === "" ||
    userPhone === "";
  const onPwConfirmChange = (e) => {
    // 추가: 비밀번호 확인용 입력값 변경 시
    setPwConfirm(e.target.value);
  };

  const onPwChange = (e) => {
    setPw(e.target.value);
  };

  const onNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onPhoneChange = (e) => {
    const input = e.target.value;
    const onlyNums = input.replace(/[^0-9]/g, "");
    if (input !== onlyNums) {
      setPhoneError("숫자만 입력해주세요"); // 숫자 이외의 문자 입력 시 에러 메시지 설정
    } else {
      setPhoneError(""); // 숫자만 입력한 경우 에러 메시지 초기화
    }
    SetUserPhone(onlyNums);
  };

  const emailCheck = (userEmail) => {
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const isValid = emailRegEx.test(userEmail);
    if (!isValid) {
      setEmailError("올바른 이메일 주소가 아닙니다.");
    } else {
      setEmailError("");
    }
  };

  const onEmailChange = (e) => {
    setuserEmail(e.target.value);
    emailCheck(e.target.value);
  };

  const setSignupData = async () => {
    setterSignupData({
      name: userName,
      phoneNumber: userPhone,
      email: userEmail,
      password: pw,
    });
    // console.log(settingComSignupData);
  };

  const emailDuplicate = async () => {
    axiosInstance
      .post(`/api/user/duplicate/${userEmail}`)
      .then((response) => {
        if (response.data) {
          setSignupData();
          navigate("/signupa");
          console.log(settingComSignupData);
        } else {
          alert("중복된 이메일임");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleSubmit = async () => {
    if (pw === pwConfirm) {
      emailDuplicate();
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };
  return (
    <Container>
      <BackAppBar label="회원가입" />
      <WrapperInputOut>
        <Wrapper2>
          <Text theme="signupSubTitle"> 개인정보 입력 </Text>
          <NumWrapper>
            <NumImage src={first} alt="1" />
            <NumImage src={second} alt="2" />
            <NumImage src={third} alt="3" />
          </NumWrapper>
        </Wrapper2>
        <BackgroundImage src={design1} alt="디자인" />

        <WrapperInput>
          <SignupWrapper>
            <Image src={signupUser} alt="이름이미지" />
            <SignUpInput
              placeholder="이름"
              onChange={onNameChange}
              value={userName}
            />
          </SignupWrapper>
          <SignupWrapper>
            <Image src={signupPhone} alt="번호이미지" />

            <SignUpInput
              placeholder="핸드폰번호"
              onChange={onPhoneChange}
              value={userPhone}
            />
          </SignupWrapper>
          {phoneError && <Text theme="emailerror">{phoneError}</Text>}
          <SignupWrapper>
            <Image src={signupEmail} alt="이메일이미지" />
            <SignUpInput
              placeholder="이메일"
              onChange={onEmailChange}
              value={userEmail}
            />
          </SignupWrapper>
          {emailError && <Text theme="emailerror">{emailError}</Text>}
          <SignupWrapper>
            <Image src={signupPwd} alt="비밀번호이미지" />
            <SignUpInput
              type="password"
              placeholder="비밀번호"
              onChange={onPwChange}
              value={pw}
            />
          </SignupWrapper>
          <SignupWrapper>
            <Image src={signupPwd} alt="비밀번호이미지" />
            <SignUpInput
              type="password"
              placeholder="비밀번호 확인"
              onChange={onPwConfirmChange}
              value={pwConfirm}
            />
          </SignupWrapper>
          <Button theme="submitBtn" onClick={handleSubmit}>
            Sign up
          </Button>
        </WrapperInput>
      </WrapperInputOut>
    </Container>
  );
};

export default Signup;
