import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Button, TextList, TransactionItems } from "../../components";
import {
  Container,
  Wrapper,
  Wrapper2,
  BackgroundImage,
  BackImage,
  WrapperOut,
  CheckPerson,
  TransactionLists,
  SubTitleWraper,
} from "./styled";
import backIcon from "../../assets/images/backIcon.svg";
import design1 from "../../assets/images/design1.svg";

const Transaction = () => {
  return (
    <Container>
      <Wrapper>
        <BackImage src={backIcon} alt="돌아가기" />
        <Text theme="signupTitle">조회 결과</Text>
      </Wrapper>
      <WrapperOut>
        <Wrapper2>
          <Text theme="subTitle"> 신원 조회 </Text>
        </Wrapper2>
        <CheckPerson>
          <TextList category="이름 : " content="조현진" />
          <TextList category="계좌번호 : " content="1234587125" />
          <TextList category="소속 : " content="신한투자증권" />
          <TextList category="사업자번호 : " content="448458481" />
        </CheckPerson>
        <BackgroundImage src={design1} alt="디자인" />
        <Wrapper2>
          <Text theme="subTitle">거래 내역</Text>
        </Wrapper2>

        <TransactionLists>
          <TransactionItems
            backgroundColor="#471AA0"
            theme="transactionTableTitle"
            updown="transactionTableTitle"
            content1="종목명"
            content2="매매일자"
            content3="실현손익"
            content4="손익률"
            content5="거래종류"
            content6="거래단가"
          />
          <TransactionItems
            theme="transactionTableContent"
            updown="transactionUp"
            content1="신한투자증권"
            content2="2023.11.22"
            content3="255874"
            content4="34%"
            content5="국내주식매도"
            content6="2541100"
          />
          <TransactionItems
            theme="transactionTableContent"
            updown="transactionUp"
            content1="신한투자증권"
            content2="2023.11.22"
            content3="255874"
            content4="34%"
            content5="국내주식매도"
            content6="2541100"
          />
          <TransactionItems
            theme="transactionTableContent"
            updown="transactionUp"
            content1="신한투자증권"
            content2="2023.11.22"
            content3="255874"
            content4="34%"
            content5="국내주식매도"
            content6="2541100"
          />
        </TransactionLists>
      </WrapperOut>
    </Container>
  );
};

export default Transaction;
