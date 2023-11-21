import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil"; // 추가import { Text, InputBox, BackAppBar } from "../../components";
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
import { axiosInstance } from "../../apis";
import BackList from "../../assets/images/banklist.svg";
import first from "../../assets/images/firstChecked.svg";
import second from "../../assets/images/secondNocheck.svg";
import third from "../../assets/images/thirdNocheck.svg";
import design1 from "../../assets/images/design1.svg";
import AccountNum from "../../assets/images/account.svg";
import { financialInstitutionState } from "../../store/atoms";
import { transactionNumberState } from "../../store/atoms";
import { Text, BackAppBar, AlertOneBtnModal } from "../../components";

const AddAccount = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalOpen = () => {
    setModalOpen(true);
  };
  const modalClose = () => {
    setModalOpen(false);
  };
  const [financialInstitution, setFinancialInstitution] = useRecoilState(
    financialInstitutionState
  ); // 수정
  const [transactionNumber, setTransactionNumber] = useRecoilState(
    transactionNumberState
  ); // 수정
  const navigate = useNavigate();
  const [temp, setTemp] = useState("");

  ///// 계좌 번호 중복 체크 //////
  const checkAccountDuplicate = async () => {
    // 여기서 토큰 값을 가져오거나, 토큰이 있다고 가정합니다.
    const token = document.cookie // 쿠키 값 가져오기
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (token) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
      try {
        const response = await axiosInstance.get(
          `/api/accounts/duplicate/${transactionNumber}`
        );
        if (response.data.data === true) {
          modalOpen(); // 이미 존재하는 계좌번호일 경우 모달 열기
        } else {
          navigate("/addaccount2"); // 중복되지 않는 경우 다음 페이지로 이동
        }
      } catch (error) {
        console.error("Error checking account duplicate:", error);
        // 에러 발생 시 예외 처리
      }
    } else {
      console.log("토큰이 없습니다. 로그인이 필요합니다."); // 토큰이 없을 경우 로그인 필요 메시지 출력
      // 또는 사용자에게 다시 로그인하라는 경고 메시지 표시 등의 처리
    }
  };
  const ontempChange = (e) => {
    setTemp(e.target.value);
  };
  const handleNextClick = () => {
    checkAccountDuplicate();
    // console.log("계좌정보", financialInstitution, transactionNumber);
    // navigate("/addaccount2");
  };
  return (
    <Container>
      {isModalOpen && (
        <AlertOneBtnModal closeHandler={modalClose}>
          이미 존재하는 계좌번호 입니다
        </AlertOneBtnModal>
      )}
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
