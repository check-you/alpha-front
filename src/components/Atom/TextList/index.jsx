import React from "react";
import { Text } from "../../../components";
import {
  Container,
  InsideContianer,
  InsideContianer1,
  InsideContianer2,
} from "./styled";

const TransactionItems = ({ updown, theme, category, content }) => {
  return (
    <Container>
      <InsideContianer1>
        <Text theme="transactioninfo1">{category}</Text>
      </InsideContianer1>
      <InsideContianer2>
        <Text theme="transactioninfo2">{content}</Text>
      </InsideContianer2>
    </Container>
  );
};

export default TransactionItems;
