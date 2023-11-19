import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Button } from "../../components";
import {
  Container,
  Image,
  Wrapper,
  Wrapper2,
  WrapperInput,
  SignupWrapper,
  SignUpInput,
  BackgroundImage,
  NumWrapper,
  BackImage,
  WrapperInputOut,
  NumImage,
} from "./styled";
import signupEmail from "../../assets/images/SignupEmail.svg";
import signupUser from "../../assets/images/signupUser.svg";
import signupPhone from "../../assets/images/signupPhone.svg";
import signupPwd from "../../assets/images/signupPwd.svg";
import backIcon from "../../assets/images/backIcon.svg";
import design1 from "../../assets/images/design1.svg";
import first from "../../assets/images/firstChecked.svg";
import second from "../../assets/images/secondNocheck.svg";
import third from "../../assets/images/thirdNocheck.svg";
const Signup = () => {
  const [userEmail, setuserEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState(""); // 추가: 비밀번호 확인을 위한 상태값
  const [userNickname, setUserNickname] = useState("");
  const [userPhone, SetUserPhone] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const isButtonDisabled =
    pw !== pwConfirm ||
    pw === "" ||
    userEmail === "" ||
    userNickname === "" ||
    userPhone === "";
  const onPwConfirmChange = (e) => {
    // 추가: 비밀번호 확인용 입력값 변경 시
    setPwConfirm(e.target.value);
  };

  const onPwChange = (e) => {
    setPw(e.target.value);
  };

  const onNicknameChange = (e) => {
    setUserNickname(e.target.value);
  };

  const onPhoneChange = (e) => {
    SetUserPhone(e.target.value);
  };

  const emailCheck = (username) => {
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const isValid = emailRegEx.test(username);
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

  // const onSignUp = async () => {
  //   axiosInstance
  //     .post("/auth/signup", {
  //       email: userEmail,
  //       nickname: userNickname,
  //       userPw: pw,
  //       age: userAge,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       alert("가입이 완료되었습니다. 로그인을 진행해주세요.");
  //       navigate("/login");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  const handleSubmit = () => {
    if (pw === pwConfirm) {
      // 수정: 비밀번호 확인
      // 실행할 코드 (예: 회원가입 요청)
      // axiosInstance.post("/auth/signup", {...})
      // .then(response => { ... })
      // .catch(error => { ... });
      navigate("/signupa");
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
              onChange={onNicknameChange}
              value={userNickname}
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
