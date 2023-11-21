import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Text, TextList, TransactionItems, BackAppBar } from "../../components";
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
import { transactionFromApi } from "../../store/atoms";
const Transaction = () => {
  const [innerData, setInnerData] = useState({});
  const dataFromApi = useRecoilValue(transactionFromApi);
  const getUpDownClass = (value) => {
    // '%' 문자 제거 후 숫자로 변환
    const profitRate = parseFloat(value.replace("%", ""));

    // 숫자로 변환된 손익률에 따라 클래스 지정
    return profitRate > 0 ? "transactionUp" : "transactionDown";
  };
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  useEffect(() => {
    setInnerData(dataFromApi);
    console.log(dataFromApi, "메인에서 설정한 그대로");
    console.log(dataFromApi.name, "데이터!!!!");
    console.log(dataFromApi.bank, "데이터!!!!");
    console.log(dataFromApi.transactionList, "데이터!!!!");
  }, [dataFromApi]);
  useEffect(() => {
    setInnerData(innerData, "inner Data");
  }, [innerData]);

  return (
    <Container>
      <BackAppBar label="조회 결과" />
      <WrapperOut>
        <Wrapper2>
          <Text theme="subTitle"> 신원 조회 </Text>
        </Wrapper2>
        <CheckPerson>
          <TextList category="이름 : " content={dataFromApi.name} />
          <TextList category="계좌번호 : " content={dataFromApi.account} />
          <TextList category="소속 : " content={dataFromApi.belong} />
          <TextList
            category="사업자번호 : "
            content={dataFromApi.businessCode}
          />
          {/* <TextList category="이름 : " content={dataFromApi.name} />
          <TextList category="계좌번호 : " content={dataFromApi.data.account} />
          <TextList category="소속 : " content={dataFromApi.data.belong} />
          <TextList
            category="사업자번호 : "
            content={dataFromApi.data.businessCode}
          /> */}
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
            itemName="종목명"
            transactionTime="매매일자"
            category="거래 종류"
            profitRate="손익률"
            price="거래단가"
          />
          {dataFromApi.transactionList &&
            dataFromApi.transactionList.map((item, index) => {
              const updownStyle = getUpDownClass(item.profitRate);
              return (
                <TransactionItems
                  key={index}
                  theme="transactionTableContent"
                  updown={updownStyle}
                  itemName={item.itemName}
                  transactionTime={item.transactionTime}
                  profitRate={item.profitRate}
                  price={numberWithCommas(item.price)}
                  category={item.category}
                />
              );
            })}
          {/* <TransactionItems
            theme="transactionTableContent"
            updown="transactionUp"
            itemName="신한투자증권"
            transactionTime="2023.11.22"
            price="255874"
            profitRate="34%"
            category="국내주식매도"
          />
          <TransactionItems
            theme="transactionTableContent"
            updown="transactionUp"
            itemName="신한투자증권"
            transactionTime="2023.11.22"
            price="255874"
            profitRate="34%"
            category="국내주식매도"
          />
          <TransactionItems
            theme="transactionTableContent"
            updown="transactionUp"
            itemName="신한투자증권"
            transactionTime="2023.11.22"
            price="255874"
            profitRate="34%"
            category="국내주식매도"
          />
          <TransactionItems
            theme="transactionTableContent"
            updown="transactionUp"
            itemName="신한투자증권"
            transactionTime="2023.11.22"
            price="255874"
            profitRate="34%"
            category="국내주식매도"
          /> */}
        </TransactionLists>
      </WrapperOut>
    </Container>
  );
};

export default Transaction;
