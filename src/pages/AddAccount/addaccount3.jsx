import React from 'react'
import { useNavigate } from 'react-router-dom';
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

function AddAccount3({ customerName = "조현진", bank = "KB증권", accountNumber = "93931967948" }) {
    const navigate = useNavigate(); 
    const handleNextClick = () => {
        navigate('/LinkedAccounts');
      };
    return (
        <Container>
        <BackAppBar>
          <BackImage src={backIcon} alt="돌아가기" />
          <Text theme="signupTitle">계좌 연결 추가</Text>
        </BackAppBar>
        <WrapperInputOut>
          <Wrapper2>
            <Text> 개좌 연결 완료 </Text>
            <NumWrapper>
              <NumImage src={first} alt="1" />
              <NumImage src={second} alt="2" />
              <NumImage src={third} alt="3" />
            </NumWrapper>
          </Wrapper2>
          <BackgroundImage src={design1} alt="디자인" />
        </WrapperInputOut>

        <NoticeWrapper3>
        <Text>{customerName} 고객님,</Text>
        <Text>
          아래 계좌 연결을 완료했습니다.
        </Text>
        </NoticeWrapper3>

        <AccountView>
            <Image2 src={backIcon} alt="돌아가기" />
            <AccountInfo>
                <Text>
                    {bank}
                </Text>
                <Text>
                    ({accountNumber})
                </Text>
            </AccountInfo>
        </AccountView>
        <Button onClick={handleNextClick}>내 계좌 관리하러가기</Button>
        <ForLayout2></ForLayout2>
        </Container>
    )
}

export default AddAccount3
