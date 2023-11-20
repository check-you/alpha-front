import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, InputBox } from "../../components";
import {
  Container,
  Image,
  Wrapper,
  Wrapper2,
  WrapperInputOut,
  BackgroundImage,
  NumWrapper,
  BackImage,
  NumImage,
  SignupWrapper,
  NoticeWrapper,
  SignUpInput,
  Button,
  SignUpSelectBox,
} from "./styled";
import BackList from "../../assets/images/banklist.svg";
import backIcon from "../../assets/images/backIcon.svg";
import first from "../../assets/images/firstChecked.svg";
import second from "../../assets/images/secondNocheck.svg";
import third from "../../assets/images/thirdNocheck.svg";
import design1 from "../../assets/images/design1.svg";
import AccountNum from "../../assets/images/account.svg";

const AddAccount = () => {
  const [financialInstitution, setFinancialInstitution] = useState("");
  const [transactionNumber, setTransactionNumber] = useState("");
  const navigate = useNavigate();
  const [temp, setTemp] = useState("");

  const ontempChange = (e) => {
    setTemp(e.target.value);
  };
  const handleNextClick = () => {
    // Do any necessary validation or processing here before navigating
    navigate("/addaccount2");
  };
  return (
    <Container>
      <Wrapper>
        <BackImage src={backIcon} alt="돌아가기" />
        <Text theme="signupTitle">계좌 연결 추가</Text>
      </Wrapper>
      <WrapperInputOut>
        <Wrapper2>
          <Text> 개좌 정보 입력 </Text>
          <NumWrapper>
            <NumImage src={first} alt="1" />
            <NumImage src={second} alt="2" />
            <NumImage src={third} alt="3" />
          </NumWrapper>
        </Wrapper2>
        <BackgroundImage src={design1} alt="디자인" />
      </WrapperInputOut>
      <SignupWrapper>
        <Image src={BackList} alt="금융기관이미지" />
        <SignUpSelectBox
          id="financialInstitution"
          value={financialInstitution}
          onChange={(e) => setFinancialInstitution(e.target.value)}
        >
          <option value="">금융기관을 선택해주세요</option>
          <option value="신한투자증권">신한투자증권</option>
          <option value="KB증권">KB증권</option>
          <option value="NH투자증권">NH투자증권</option>
          <option value="SK증권">SK증권</option>
          <option value="골든브릿지투자증권">골든브릿지투자증권</option>
          <option value="교보증권">교보증권</option>
          <option value="대신증권">대신증권</option>
          <option value="미래에셋대우">미래에셋대우</option>
          <option value="미래에셋증권">미래에셋증권</option>21`az`
          <option value="부국증권">부국증권</option>
          <option value="삼성증권">삼성증권</option>
          <option value="신영증권">신영증권</option>
          <option value="삼성증권">삼성증권</option>
          <option value="유진투자증권">유진투자증권</option>
          <option value="유화증권">유화증권</option>
          <option value="키움증권">키움증권</option>
          <option value="IBK투자증권">IBK투자증권</option>
          <option value="하나증권">하나증권</option>
          <option value="유안타증권">유안타증권</option>
          <option value="한국투자증권">한국투자증권</option>
          <option value="흥국증권">흥국증권</option>
          <option value="이베스트투자증권">이베스트투자증권</option>
          <option value="한국증권금융">한국증권금융</option>
          <option value="한국증권금융">한국증권금융</option>
          <option value="한국증권금융">한국증권금융</option>
          <option value="한국증권금융">한국증권금융</option>
          <option value="한국투자증권">한국투자증권</option>
        </SignUpSelectBox>
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

      <NoticeWrapper>
        <Text>계좌 인증 유의사항</Text>
        <Text>
          ※ 반드시 출금 및 거래 내역을 확인할 수 있는 계좌를 등록하세요.
        </Text>
        <Text>
          ※ 등록한 계좌 외에 타 계좌로 출금하시려면 신한 알파에서 모바일 OTP를
          발급받으시거나 타기관 OTP 등록을 해주세요.
        </Text>
        <Text>
          ※ 은행 공동망 점검시간은 인증을 진행할 수 없습니다. 점심시간 이후에
          시도해주시기 바랍니다.
        </Text>
      </NoticeWrapper>

      <Button onClick={handleNextClick}>다음</Button>
    </Container>
  );
};

export default AddAccount;
