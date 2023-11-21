import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { useRecoilState } from 'recoil';  // <-- Import useRecoilState
import { financialInstitutionState, transactionNumberState } from '../../store/atoms';
import first from "../../assets/images/firstNocheck.svg";
import second from "../../assets/images/secondCheck.svg";
import third from "../../assets/images/thirdNocheck.svg";
import design1 from "../../assets/images/design1.svg";
import AccountNum from "../../assets/images/account.svg";
import { axiosInstance } from "../../apis";
import Cookies from 'js-cookie';

function AddAccount2({ customerName = "조현진", bank = "KB증권", accountNumber = "93931967948" }) {
  const [authNum, setAuthNum] = useState("");
  const [isAuthValid, setIsAuthValid] = useState(true); // Track the validity of the authentication number
  const [financialInstitution, setFinancialInstitution] = useRecoilState(financialInstitutionState);
  const [transactionNumber, setTransactionNumber] = useRecoilState(transactionNumberState);
  const navigate = useNavigate();
  const last3DigitsOfAccount = transactionNumber.slice(-3); // Extract the last 3 digits of the account number

  const handleNextClick = async () => {    
    if (authNum === last3DigitsOfAccount) {
        setIsAuthValid(true); // Reset error state if the authentication number is correct
        console.log('Financial Institution:', financialInstitution);
        console.log('Transaction Number:', transactionNumber);        
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
            category: '연금 저축 계좌',
          }, 
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          });
  
          // Handle the response as needed
          console.log('API Response:', response.data);
  
          // Continue with navigation
          navigate('/addaccount3');
        } catch (error) {
          console.error('Error making API call:', error);
        }
        navigate('/addaccount3');

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
        <Text>{customerName} 고객님,</Text>
        <Text>
          {financialInstitution}({transactionNumber})로 
          <br/>1원을 보냈습니다.
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
          <Error>
            올바른 인증번호가 아닙니다. 다시 확인해주세요.
          </Error>
        )}
      <Button onClick={handleNextClick}>다음</Button>
      <ForLayout></ForLayout>
    </Container>
  );
}

export default AddAccount2;
