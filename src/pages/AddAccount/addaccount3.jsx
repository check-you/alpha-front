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
import { useRecoilValue } from 'recoil';
import { financialInstitutionState, transactionNumberState } from '../../store/atoms';
import shinhan from "../../assets/images/shinhanLogo.svg";
import kb from "../../assets/images/kbIcon.svg";
import nh from "../../assets/images/nhlogo.svg";


function AddAccount3({ customerName = "조현진", bank = "KB증권", accountNumber = "93931967948" }) {
  const financialInstitution = useRecoilValue(financialInstitutionState);
  const transactionNumber = useRecoilValue(transactionNumberState);
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate('/LinkedAccounts');
  };
  // Determine the logo source based on the financial institution
  const getLogoSource = () => {
    switch (financialInstitution) {
      case 'KB증권':
        return kb;
      case 'NH투자증권':
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
        <Text>{customerName} 고객님,</Text>
        <Text>
          아래 계좌 연결을 완료했습니다.
        </Text>
      </NoticeWrapper3>

      <AccountView>
        <Image2 src={getLogoSource()} alt="증권사" />
        <AccountInfo>
          <Text>
            {financialInstitution}
          </Text>
          <Text>
            ({transactionNumber})
          </Text>
        </AccountInfo>
      </AccountView>
      <Button onClick={handleNextClick}>내 계좌 관리하러가기</Button>
      <ForLayout2></ForLayout2>
    </Container>
  )
}

export default AddAccount3
