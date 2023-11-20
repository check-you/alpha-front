import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, InputBox } from "../../components";
import {
  Container,
  Image,
  Wrapper2,
  WrapperInputOut,
  BackgroundImage,
  NumWrapper,
  NumImage,
  SignupWrapper,
  NoticeWrapper2,
  SignUpInput,
  Button,
  Pink,
  ForLayout,
} from "./styled";

import first from "../../assets/images/firstNocheck.svg";
import second from "../../assets/images/secondCheck.svg";
import third from "../../assets/images/thirdNocheck.svg";
import design1 from "../../assets/images/design1.svg";
import AccountNum from "../../assets/images/account.svg";

function AddAccount2({ customerName = "조현진", bank = "국민은행", accountNumber = "93931967948" }) {
  const [authNum, setAuthNum] = useState("");
  const navigate = useNavigate();

  const handleNextClick = () => {
    // Do any necessary validation or processing here before navigating
    navigate('/addaccount3')
  };
  return (
    <Container>
      <BackAppBar label="계좌 연결 추가" />

      <WrapperInputOut>
        <Wrapper2>
          <Text>계좌 인증</Text>
          <NumWrapper>
            <NumImage src={first} alt="1" />
            <NumImage src={second} alt="2" />
            <NumImage src={third} alt="3" />
          </NumWrapper>
        </Wrapper2>
        <BackgroundImage src={design1} alt="디자인" />
      </WrapperInputOut>

      <NoticeWrapper2>
        <Text>{customerName} 고객님,</Text>
        <Text>
          {bank}({accountNumber})로 1원을 보냈습니다.
        </Text>
        <Text>
          입금자명에 표시된 <Pink>인증번호 숫자 3자리</Pink>를 입력해주세요.
        </Text>
      </NoticeWrapper2>

      <SignupWrapper>
        <Image src={AccountNum} alt="계좌 이미지" />
        <SignUpInput
          id="authNum"
          type="text"
          placeholder="인증번호"
          value={authNum}
          onChange={(e) => setAuthNum(e.target.value)}
        />
      </SignupWrapper>
      <Button onClick={handleNextClick}>다음</Button>
      <ForLayout></ForLayout>
    </Container>
  );
}

export default AddAccount2;
