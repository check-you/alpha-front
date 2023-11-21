import React from "react";
import { Text } from "../../../components";
import {
  Container,
  InsideContianer,
  InsideContianer1,
  InsideContianer2,
} from "./styled";

const TextList = ({
  updown,
  theme,
  itemName,
  transactionTime,
  // content3,
  profitRate,
  price,
  category,
  backgroundColor,
}) => {
  const defaultBackgroundColor = "white"; // 기본 배경색 설정

  // 배경색 스타일 설정
  const containerStyle = {
    backgroundColor: backgroundColor || defaultBackgroundColor,
  };
  return (
    <Container style={containerStyle}>
      <InsideContianer style={containerStyle}>
        <Text theme={theme}>{category} </Text>
      </InsideContianer>
      <InsideContianer style={containerStyle}>
        <Text theme={theme}>{itemName}</Text>
      </InsideContianer>

      <InsideContianer style={containerStyle}>
        <Text theme={theme}>{price}</Text>
      </InsideContianer>
      <InsideContianer style={containerStyle}>
        <Text theme={updown}>{profitRate}</Text>
      </InsideContianer>
      <InsideContianer style={containerStyle}>
        <Text theme={theme}>{transactionTime}</Text>
      </InsideContianer>
    </Container>
  );
};

export default TextList;
