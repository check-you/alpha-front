import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Text, InputBox, BackAppBar } from "../../components";
import {
  Container,
  Image,
  Wrapper2,
  WrapperInputOut,
  BackgroundImage,
  NumWrapper,
  NumImage,
  Error,
  SignupWrapper,
  NoticeWrapper2,
  SignUpInput,
  Button,
  Pink,
  ForLayout,
} from "./styled";
import { useSetRecoilState } from "recoil";
import { useRecoilState, useRecoilValue } from "recoil"; // <-- Import useRecoilState
import {
  financialInstitutionState,
  transactionNumberState,
} from "../../store/atoms";
import first from "../../assets/images/firstNocheck.svg";
import second from "../../assets/images/secondCheck.svg";
import third from "../../assets/images/thirdNocheck.svg";
import design1 from "../../assets/images/design1.svg";
import AccountNum from "../../assets/images/account.svg";
import { axiosInstance } from "../../apis";
import Cookies from "js-cookie";
import { transactionFromApi, loginUserEmail } from "../../store/atoms";

function AddAccount2({
  customerName = "조현진",
  bank = "KB증권",
  accountNumber = "93931967948",
}) {
  const [authNum, setAuthNum] = useState("");
  const [isAuthValid, setIsAuthValid] = useState(true); // Track the validity of the authentication number
  const [financialInstitution, setFinancialInstitution] = useRecoilState(
    financialInstitutionState
  );
  const [transactionNumber, setTransactionNumber] = useRecoilState(
    transactionNumberState
  );
  const navigate = useNavigate();
  const [accountsData, setAccountsData] = useState({});
  const [userName, setUserName] = useState("");
  const setUserEmail = useSetRecoilState(loginUserEmail);
  const dataFromApi = useRecoilValue(transactionFromApi);
  const getEmail = useRecoilValue(loginUserEmail);
  const last3DigitsOfAccount = transactionNumber.slice(-3); // Extract the last 3 digits of the account number

  console.log("Email before setting:", getEmail);
  console.log("User Email:", getEmail);
  console.log(accountsData, "어카운츠-데이터");
  console.log(accountsData.name, "이름");

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
        console.log(response.data.data, "fail data+data");
        console.log(response.data, "fail data");
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
  const handleNextClick = async () => {
    if (authNum === last3DigitsOfAccount) {
      setIsAuthValid(true); // Reset error state if the authentication number is correct
      console.log("Financial Institution:", financialInstitution);
      console.log("Transaction Number:", transactionNumber);
      const accessToken = document.cookie // 쿠키 값 가져오기
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
      //계좌 연결 POST API 부분
      try {
        console.log(accessToken);
        // Make the API call
        const response = await axiosInstance.post(
          "/api/accounts",
          {
            bank: financialInstitution,
            account: transactionNumber,
            category: "연금 저축 계좌",
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // Handle the response as needed
        console.log("API Response:", getEmail);

        // Continue with navigation
        navigate("/addaccount3");
      } catch (error) {
        console.error("Error making API call:", error);
      }
      navigate("/addaccount3");
    } else {
      setIsAuthValid(false); // Set error state if the authentication number is incorrect
    }
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
        <Text>{userName} 고객님,</Text>
        <Text>
          {financialInstitution}({transactionNumber})로
          <br />
          1원을 보냈습니다.
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
      {!isAuthValid && (
        <Error>올바른 인증번호가 아닙니다. 다시 확인해주세요.</Error>
      )}
      <Button onClick={handleNextClick}>다음</Button>
      <ForLayout></ForLayout>
    </Container>
  );
}

export default AddAccount2;
