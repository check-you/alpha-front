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
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
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
        <Text theme={theme}>{content1} </Text>
      </InsideContianer>
      <InsideContianer style={containerStyle}>
        <Text theme={theme}>{content2}</Text>
      </InsideContianer>
      <InsideContianer style={containerStyle}>
        <Text theme={theme}>{content3}</Text>
      </InsideContianer>
      <InsideContianer style={containerStyle}>
        <Text theme={updown}>{content4}</Text>
      </InsideContianer>
      <InsideContianer style={containerStyle}>
        <Text theme={theme}>{content5}</Text>
      </InsideContianer>
      <InsideContianer style={containerStyle}>
        <Text theme={theme}>{content6}</Text>
      </InsideContianer>
    </Container>
  );
};

export default TextList;
