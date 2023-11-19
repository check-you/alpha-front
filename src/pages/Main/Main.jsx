import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import {
  Container,
  Image,
  LinkWrapper,
  ThinLink,
  BoldLink,
  Button,
  SignupWrapper,
  SignUpInput,
  LogoImage,
  ErrorMessage,
} from "./styled";
import User from "../../assets/images/signupUser.svg";
import BackList from "../../assets/images/banklist.svg";
import AccountNum from "../../assets/images/account.svg";
import Group from "../../assets/images/sosock.svg";
import ID from "../../assets/images/saupja.svg";

const Main = () => {
  const [name, setName] = useState("");
  const [financialInstitution, setFinancialInstitution] = useState("");
  const [transactionNumber, setTransactionNumber] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSearch = () => {
    if (!name || !financialInstitution || !transactionNumber) {
      setShowError(true);
    } else {
      setShowError(false);
      console.log('조회 버튼이 클릭되었습니다.');
      // 여기에 조회 로직 추가
    }
  };

  return (
    <Container>
      <LogoImage src={Logo} alt="로고이미지" className="logo" />

      <SignupWrapper>
        <Image src={User} alt="이름이미지" />
        <SignUpInput
          id="name"
          type="text"
          placeholder="*이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </SignupWrapper>

      <SignupWrapper>
        <Image src={BackList} alt="금융기관이미지" />
        <SignUpInput
          id="financialInstitution"
          type="text"
          placeholder="*금융기관"
          value={financialInstitution}
          onChange={(e) => setFinancialInstitution(e.target.value)}
        />
      </SignupWrapper>

      <SignupWrapper>
        <Image src={AccountNum} alt="계좌이미지" />
        <SignUpInput
          id="transactionNumber"
          type="text"
          placeholder="*계좌번호"
          value={transactionNumber}
          onChange={(e) => setTransactionNumber(e.target.value)}
        />
      </SignupWrapper>

      <SignupWrapper>
        <Image src={Group} alt="소속이미지" />
        <SignUpInput
          id="affiliation"
          type="text"
          placeholder="소속"
          value={affiliation}
          onChange={(e) => setAffiliation(e.target.value)}
        />
      </SignupWrapper>

      <SignupWrapper>
        <Image src={ID} alt="사업번호이미지" />
        <SignUpInput
          id="userNumber"
          type="text"
          placeholder="사업자 번호"
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
        />
      </SignupWrapper>
      {showError && (
        <ErrorMessage>＊이름, 금융기관, 거래번호는 필수 입력값입니다.</ErrorMessage>
      )}
      <Button onClick={handleSearch}>조회</Button>

    

      <LinkWrapper>
        <ThinLink href="#">투자자문업자이신가요?</ThinLink>
        <BoldLink href="/투자자문업자홈">투자자문업자홈</BoldLink>
      </LinkWrapper>
    </Container>
  );
};

export default Main;
