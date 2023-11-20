import React from 'react'
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
  NoticeWrapper,
  SignUpInput,
  Button,
} from "./styled";
import first from "../../assets/images/firstNocheck.svg";
import second from "../../assets/images/secondNocheck.svg";
import third from "../../assets/images/thirdCheck.svg";
import design1 from "../../assets/images/design1.svg";

function AddAccount3() {
  return (
    <Container>
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
