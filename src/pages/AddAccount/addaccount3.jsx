import React from 'react'
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
  } from "./styled";
import backIcon from "../../assets/images/backIcon.svg";  
import first from "../../assets/images/firstNocheck.svg";
import second from "../../assets/images/secondNocheck.svg";
import third from "../../assets/images/thirdCheck.svg";
import design1 from "../../assets/images/design1.svg";

function AddAccount3() {
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
        </Container>
    )
}

export default AddAccount3
