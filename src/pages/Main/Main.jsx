import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { axiosInstance } from "../../apis";
import { transactionFromApi } from "../../store/atoms";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/DoubleCheck.svg";
// import Logo from "../../assets/images/logo.svg";
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
import { AlertModal } from "../../components";
import User from "../../assets/images/signupUser.svg";
import BackList from "../../assets/images/banklist.svg";
import AccountNum from "../../assets/images/account.svg";
import Group from "../../assets/images/sosock.svg";
import ID from "../../assets/images/saupja.svg";

const Main = () => {
  const setTransactionDatas = useSetRecoilState(transactionFromApi);
  const [userName, setUserName] = useState("");
  const [isThere, setIsThere] = useState(false);
  const [financialInstitution, setFinancialInstitution] = useState("");
  const [transactionNumber, setTransactionNumber] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [showError, setShowError] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const modalOpen = () => {
    setModalOpen(true);
  };
  const modalClose = () => {
    setModalOpen(false);
  };
  const handleCloseAlert = () => {
    modalClose();
  };
  const handleGotoLogin = () => {
    navigate("/signin");
  };
  const handleIsLogin = () => {
    if (true) {
      modalOpen();
      // 로그인 여부 확인해서 들어오기!!!!
      // navigate("/linkedaccounts");
    } else {
      modalOpen();
    }
  };
  const getTransactions = async () => {
    axiosInstance
      .post("/api/main/search", {
        name: userName,
        bank: financialInstitution,
        account: transactionNumber,
      })
      .then((response) => {
        setTransactionDatas(response.data);
        console.log(response.data);
        alert("거래내역 가져오기완료!:D");

        if (response.data.success) {
          navigate(
            `/Transaction?userName=${userName}&financialInstitution=${financialInstitution}&transactionNumber=${transactionNumber}`
          );
        } else {
          alert("등록된 사용자가 아닙니다. ");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleSearch = () => {
    if (!userName || !financialInstitution || !transactionNumber) {
      setShowError(true);
    } else {
      setShowError(false);
      console.log("조회 버튼이 클릭되었습니다.");
      getTransactions();
      // 여기에 조회 로직 추가
      // navigate(
      //   `/Transaction?userName=${userName}&financialInstitution=${financialInstitution}&transactionNumber=${transactionNumber}`
      // );
    }
  };

  return (
    <Container>
      {isModalOpen && (
        <AlertModal
          closeHandler={handleCloseAlert}
          LoginHandler={handleGotoLogin}
        >
          로그인 사용자만 이용할 수 있습니다
        </AlertModal>
      )}

      <LogoImage src={Logo} alt="로고이미지" className="logo" />

      <SignupWrapper>
        <Image src={User} alt="이름이미지" />
        <SignUpInput
          id="userName"
          type="text"
          placeholder="*이름"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
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
        <ErrorMessage>
          ＊이름, 금융기관, 거래번호는 필수 입력값입니다.
        </ErrorMessage>
      )}
      <Button onClick={handleSearch}>조회</Button>

      <LinkWrapper>
        <ThinLink>투자자문업자이신가요?</ThinLink>
        <BoldLink onClick={handleIsLogin}>투자자문업자홈</BoldLink>
      </LinkWrapper>
    </Container>
  );
};

export default Main;
