import React from "react";
import {
  Container,
  LogoImage,
  TrashImage,
  TextWrapper,
  TrashWrapper,
} from "./styled";
import { Text } from "../../../components";
import shinhanLogo from "../../../assets/images/shinhanLogo.svg";
import deletbtn from "../../../assets/images/trash.svg";
const LinkedAccount = ({ deleteHandler, bank, account, category }) => {
  /* 여기에 들어갈 내용 1. 금융기관 bank 2. 상품명 accountName 3. 계좌번호 accountNum */

  return (
    <Container>
      <LogoImage src={shinhanLogo} alt="프로필 이미지" />
      <TextWrapper>
        <Text theme="accountCorp">
          {bank} {category}신한투자금융 입출금통장 [입출금]
        </Text>
        <Text theme="accountNum"> 1234-567-78944{account} </Text>
      </TextWrapper>
      <TrashWrapper>
        <TrashImage
          src={deletbtn}
          alt="삭제 버튼"
          onClick={() => deleteHandler(account)}
        />
      </TrashWrapper>
    </Container>
  );
};

export default LinkedAccount;
