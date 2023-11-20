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
  const getTrnasactions = async () => {
    axiosInstance
      .get("/api/accounts/yoj9168@gmail.com")
      .then((response) => {
        console.log(response.data);
        alert("연결된 계좌 리스트!:D");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  ////////////////////////////////////
  // const fetchData = async () => {
  //   const accessToken = getAccessToken();

  //   if (accessToken) {
  //     // 토큰이 있다면 Axios 요청 설정
  //     try {
  //       const response = await axiosInstance.get("/api/accounts/yoj9168@gmail.com", {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`, // 헤더에 토큰 추가
  //         },
  //       });

  //       // 요청에 대한 처리
  //       console.log('데이터:', response.data);
  //       alert("연결된 계좌 리스트!:D");
  //     } catch (error) {
  //       // 오류 처리
  //       console.error('데이터 가져오기 오류:', error);
  //     }
  //   } else {
  //     // 토큰이 없을 때의 처리
  //     console.log('접근 토큰 없음.');
  //   }
  // };

  ///////////////////////////////////////////

  useEffect(() => {
    getTrnasactions();
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
