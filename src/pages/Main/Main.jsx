// Main.js 파일

import React from "react";
import Logo from "../../assets/images/logo.svg";
import {
  Container,
  Image,
  Wrapper,
  LinkButton,
  Button,
  SignupWrapper,
  SignUpInput,
} from "./styled";
import signupPwd from "../../assets/images/signupPwd.svg";

const Main = () => {
  const handleSearch = () => {
    console.log('조회 버튼이 클릭되었습니다.');
  };

  return (
    <Container>
      <Image src={Logo} alt="로고이미지" />

      <SignupWrapper>
        <Image src={signupPwd} alt="비밀번호이미지" />
        <SignUpInput
          id="name"
          type="text"
          placeholder="이름을 입력하세요"
        />
      </SignupWrapper>

      <SignupWrapper>
        <Image src={signupPwd} alt="비밀번호이미지" />
        <SignUpInput
          id="financialInstitution"
          type="text"
          placeholder="금융기관을 입력하세요"
        />
      </SignupWrapper>

      <SignupWrapper>
        <Image src={signupPwd} alt="비밀번호이미지" />
        <SignUpInput
          id="transactionNumber"
          type="text"
          placeholder="거래번호를 입력하세요"
        />
      </SignupWrapper>

      <SignupWrapper>
        <Image src={signupPwd} alt="비밀번호이미지" />
        <SignUpInput
          id="affiliation"
          type="text"
          placeholder="소속을 입력하세요"
        />
      </SignupWrapper>

      <SignupWrapper>
        <Image src={signupPwd} alt="비밀번호이미지" />
        <SignUpInput
          id="accountNum"
          type="text"
          placeholder="계좌번호"
        />
      </SignupWrapper>

      <SignupWrapper>
        <Image src={signupPwd} alt="비밀번호이미지" />
        <SignUpInput
          id="userNumber"
          type="text"
          placeholder="사용자 번호를 입력하세요"
        />
      </SignupWrapper>

      <Button onClick={handleSearch}>조회</Button>

      <div>
        <p>투자자문업자이신가요?</p>
        <LinkButton href="/투자자문업자홈">투자자문업자홈바로가기</LinkButton>
      </div>
    </Container>
  );
};

export default Main;
