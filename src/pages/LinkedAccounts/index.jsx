import React, { useEffect } from "react";
import { axiosInstance } from "../../apis";
import {
  Text,
  LinkedAccount,
  AddAccountBtn,
  HomeAppBar,
} from "../../components";
import {
  Container,
  TitleWrapper,
  NameWrapper,
  Image,
  ContentWrapper,
  NameWrapperbottom,
  AccountWrapper,
  AddBtnWrapper,
} from "./styled";
const LinkedAccounts = () => {
  const getAccounts = async () => {
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
    getAccounts();
  }, []);

  return (
    <Container>
      <HomeAppBar label="계좌 관리" />
      <ContentWrapper>
        <TitleWrapper>
          <NameWrapper>
            <Text theme="dashBoardName">권기훈</Text>
            <Text theme="dashBoardInfo"> 님의 계좌정보</Text>
          </NameWrapper>
          <NameWrapperbottom>
            <Text theme="dashBoard">총 연결 계좌3 개</Text>
          </NameWrapperbottom>
        </TitleWrapper>
        {/* 계좌 리스트 api로 받아서 넣기 */}
        <AccountWrapper>
          <LinkedAccount />
        </AccountWrapper>
      </ContentWrapper>
      <AddBtnWrapper>
        <AddAccountBtn />
      </AddBtnWrapper>
    </Container>
  );
};

export default LinkedAccounts;
