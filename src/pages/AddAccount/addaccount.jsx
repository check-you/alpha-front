import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil'; // 추가import { Text, InputBox, BackAppBar } from "../../components";
import {
  Container,
  Image,
  Wrapper2,
  WrapperInputOut,
  BackgroundImage,
  NumWrapper,
  NumImage,
  SignupWrapper,
  NoticeWrapper,
  SignUpInput,
  Button,
  SignUpSelectBox,
} from "./styled";
import BackList from "../../assets/images/banklist.svg";
import first from "../../assets/images/firstChecked.svg";
import second from "../../assets/images/secondNocheck.svg";
import third from "../../assets/images/thirdNocheck.svg";
import design1 from "../../assets/images/design1.svg";
import AccountNum from "../../assets/images/account.svg";
import { financialInstitutionState } from '../../store/atoms';
import { transactionNumberState } from '../../store/atoms';
import { Text, InputBox, BackAppBar } from "../../components";

const AddAccount = () => {
  const [financialInstitution, setFinancialInstitution] = useRecoilState(financialInstitutionState); // 수정
  const [transactionNumber, setTransactionNumber] = useRecoilState(transactionNumberState); // 수정
  const navigate = useNavigate();
  const [temp, setTemp] = useState("");

  const ontempChange = (e) => {
    setTemp(e.target.value);
  };
  const handleNextClick = () => {
    console.log('계좌정보',financialInstitution,transactionNumber);
    navigate("/addaccount2");
  };
  return (
    <Container>
      <BackAppBar label="계좌 연결 추가" />
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
          <option value="교보증권">교보증권</option>
          <option value="대신증권">대신증권</option>
          <option value="SK증권">DB금융투자</option>
          <option value="메리츠증권">메리츠증권</option>
          <option value="삼성증권">삼성증권</option>
          <option value="에스케이증권">에스케이증권</option>
          <option value="현대차증권">현대차증권</option>
          <option value="NH투자증권">NH투자증권</option>
          <option value="유진투자증권">유진투자증권</option>
          <option value=" 이베스트투자증권"> 이베스트투자증권</option>
          <option value="키움증권">키움증권</option>
          <option value="하이투자증권">하이투자증권</option>
          <option value="한국투자증권">한국투자증권</option>
          <option value="  한화투자증권"> 한화투자증권</option>
          <option value="KB증권">KB증권</option>
          <option value="KTB투자증권">KTB투자증권</option>
          <option value="하나증권">하나증권</option>
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
