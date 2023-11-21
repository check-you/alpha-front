import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Button, BackAppBar } from "../../components";
import {
  Container,
  Wrapper2,
  WrapperInner,
  WrapperContent,
  BackgroundImage,
  NumWrapper,
  NumImage,
  WrapperUl,
  WrapperIl,
  WrapperInnerList,
  WrapperInnerAgree,
} from "./styled";
import design1 from "../../assets/images/design1.svg";
import first from "../../assets/images/firstNocheck.svg";
import second from "../../assets/images/secondCheck.svg";
import third from "../../assets/images/thirdNocheck.svg";
const SignupA = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/signupb");
  };
  return (
    <Container>
      <BackAppBar label="회원가입" />
      <WrapperContent>
        <Wrapper2>
          <Text theme="signupSubTitle"> 약관 동의 </Text>
          <NumWrapper>
            <NumImage src={first} alt="1" />
            <NumImage src={second} alt="2" />
            <NumImage src={third} alt="3" />
          </NumWrapper>
        </Wrapper2>
        <BackgroundImage src={design1} alt="디자인" />

        <WrapperInnerAgree>
          <WrapperInnerList>
            <WrapperUl>
              <Text theme="signupContents2">제공받는자</Text>
            </WrapperUl>
            <WrapperIl>
              <Text theme="signupContents2"> Checkyou</Text>
            </WrapperIl>
          </WrapperInnerList>
          <WrapperInnerList>
            <WrapperUl>
              <Text theme="signupContents2">
                금융거래정보를 제공할 금융기관
              </Text>
            </WrapperUl>
            <WrapperIl>
              <Text theme="signupContents2">
                - 오픈뱅킹공동업무 참여 금융회사 (당사 외 총 44개 금융기관)
              </Text>
              <Text theme="signupContents2"> 금융투자협회 18개</Text>
              <Text theme="signupContents2">
                신한투자증권,교보증권, 대신증권, DB금융투자, 메리츠증권,
                삼성증권, 에스케이증권, 현대차증권, NH투자증권, 유진투자증권,
                이베스트투자증권, 키움증권, 하이투자증권, 한국투자증권,
                한화투자증권, KB증권, KTB투자증권, 하나증권
              </Text>
            </WrapperIl>
          </WrapperInnerList>
          <WrapperInnerList>
            <WrapperUl>
              <Text theme="signupContents2">제공받을 금융거래정보의 내용</Text>
            </WrapperUl>
            <WrapperIl>
              <Text theme="signupContents2">
                - 금융정보조회 약관에 명시된 금융정보
              </Text>
              <Text theme="signupContents2">
                잔액조회 (계좌번호, 계좌잔액, 출금가능금액, 계좌종류, 상품명)
              </Text>
              <Text theme="signupContents2">
                거래내역조회 (거래일시, 거래점명, 거래금액, 거래 후 잔액,
                통장인자내용)
              </Text>
            </WrapperIl>
          </WrapperInnerList>
          <WrapperInnerList>
            <WrapperUl>
              <Text theme="signupContents2">제공 목적</Text>
            </WrapperUl>
            <WrapperIl>
              <Text theme="signupContents2">
                - 오픈뱅킹을 통한 금융거래 서비스 (조회, 이체 등) 이용
              </Text>
            </WrapperIl>
          </WrapperInnerList>
          <WrapperInnerList>
            <WrapperUl>
              <Text theme="signupContents2">
                금융거래정보 제공 동의서(오픈뱅킹용)의 유효기간
              </Text>
            </WrapperUl>
            <WrapperIl>
              <Text theme="signupContents2">
                - 금융거래정보 제공 동의일로부터 1년
              </Text>
            </WrapperIl>
          </WrapperInnerList>
        </WrapperInnerAgree>
        <WrapperInner>
          <Button theme="submitBtn" onClick={handleSubmit}>
            전체 동의합니다
          </Button>
        </WrapperInner>
      </WrapperContent>
    </Container>
  );
};

export default SignupA;
