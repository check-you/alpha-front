import React from "react";
import { Text, Button, LinkedAccount, AddAccountBtn } from "../../components";
import {
  Container,
  TitleWrapper,
  NameWrapper,
  BigTitleWrapper,
  Image,
  ContentWrapper,
  NameWrapperbottom,
  AccountWrapper,
  AddBtnWrapper,
} from "./styled";
import homeIcon from "../../assets/images/homeIcon.svg";
const LinkedAccounts = () => {
  return (
    <Container>
      <BigTitleWrapper>
        <Image src={homeIcon} alt="homeIcon" />
        <Text theme="title"> 계좌 관리 </Text>
        <Image src={homeIcon} alt="homeIcon" style={{ opacity: 0 }} />
      </BigTitleWrapper>

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
