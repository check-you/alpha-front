import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../apis";
import { useNavigate } from "react-router-dom";
import { Text, InputBox, BackAppBar } from "../../components";
import {
  Container,
  Image,
  Wrapper2,
  WrapperInputOut,
  BackgroundImage,
  NumWrapper,
  BackImage,
  NumImage,
  NoticeWrapper3,
  AccountView,
  AccountInfo,
  SignupWrapper,
  NoticeWrapper,
  SignUpInput,
  Image2,
  Button,
  ForLayout2,
} from "./styled";
import backIcon from "../../assets/images/backIcon.svg";
import first from "../../assets/images/firstNocheck.svg";
import second from "../../assets/images/secondNocheck.svg";
import third from "../../assets/images/thirdCheck.svg";
import design1 from "../../assets/images/design1.svg";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  financialInstitutionState,
  transactionNumberState,
  loginUserEmail,
} from "../../store/atoms";
import shinhan from "../../assets/images/shinhanLogo.svg";
import kb from "../../assets/images/kbIcon.svg";
import nh from "../../assets/images/nhlogo.svg";

function AddAccount3({
  customerName = "조현진",
  bank = "KB증권",
  accountNumber = "93931967948",
}) {
  const getEmail = useRecoilValue(loginUserEmail);
  const financialInstitution = useRecoilValue(financialInstitutionState);
  const transactionNumber = useRecoilValue(transactionNumberState);
  const setFinancialInstitution = useSetRecoilState(financialInstitutionState);
  const setTransactionNumber = useSetRecoilState(transactionNumberState);
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const handleNextClick = () => {
    setTransactionNumber("");
    setFinancialInstitution("");
    navigate("/LinkedAccounts");
  };

  const getUserNameF = async () => {
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
          `/api/accounts/name/${getEmail}`
        );
        if (response.data.data) {
          setUserName(response.data.data);
          console.log(response.data.data, "success data+data");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("토큰이 없습니다. 로그인이 필요합니다."); // 토큰이 없을 경우 로그인 필요 메시지 출력
      // 또는 사용자에게 다시 로그인하라는 경고 메시지 표시 등의 처리
    }
  };

  useEffect(() => {
    getUserNameF();
    console.log("useEffect 기본 ");
  }, []);
  useEffect(() => {
    console.log("userName이 변했습니다");
  }, [userName]);
  // Determine the logo source based on the financial institution
  const getLogoSource = () => {
    switch (financialInstitution) {
      case "KB증권":
        return kb;
      case "NH투자증권":
        return nh;
      default:
        return shinhan;
    }
  };
  return (
    <Container>
      <BackAppBar label="계좌 연결 추가" />
      <WrapperInputOut>
        <Wrapper2>
          <Text> 계좌 연결 완료 </Text>
          <NumWrapper>
            <NumImage src={first} alt="1" />
            <NumImage src={second} alt="2" />
            <NumImage src={third} alt="3" />
          </NumWrapper>
        </Wrapper2>
        <BackgroundImage src={design1} alt="디자인" />
      </WrapperInputOut>

      <NoticeWrapper3>
        <Text>{userName} 고객님,</Text>
        <Text>아래 계좌 연결을 완료했습니다.</Text>
      </NoticeWrapper3>

      <AccountView>
        <Image2 src={getLogoSource()} alt="증권사" />
        <AccountInfo>
          <Text>{financialInstitution}</Text>
          <Text>({transactionNumber})</Text>
        </AccountInfo>
      </AccountView>
      <Button onClick={handleNextClick}>내 계좌 관리하러가기</Button>
      <ForLayout2></ForLayout2>
    </Container>
  );
}

export default AddAccount3;
