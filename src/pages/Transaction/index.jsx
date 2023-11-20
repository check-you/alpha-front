import React, { useState } from "react";
import { axiosInstance } from "../../apis";
import { useNavigate } from "react-router-dom";
import {
  Text,
  Button,
  TextList,
  TransactionItems,
  BackAppBar,
} from "../../components";
import {
  Container,
  Wrapper2,
  BackgroundImage,
  WrapperOut,
  CheckPerson,
  TransactionLists,
  DateWrapper,
  DateWrapperTitle,
  Wrapper3,
} from "./styled";
import design1 from "../../assets/images/design1.svg";

const Transaction = () => {
  const getTrnasactions = async () => {
    axiosInstance
      .post("/api/main/search", {
        name: userName,
        bank: financialInstitution,
        account: transactionNumber,
        belong: affiliation,
        businessCode: userNumber,
      })
      .then((response) => {
        console.log(response.data);
        alert("거래내역 가져오기완료!:D");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTrnasactions();
  }, []);

  return (
    <Container>
      <BackAppBar label="조회 결과" />
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
        <Wrapper3>
          <DateWrapperTitle>
            <Text theme="dates">기간</Text>
          </DateWrapperTitle>
          <DateWrapper>
            <Text theme="dates">2023.11.17 </Text>
            <Text theme="dates"> ~ </Text>
            <Text theme="dates">2023.11.22 </Text>
          </DateWrapper>
        </Wrapper3>
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
