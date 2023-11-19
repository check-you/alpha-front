import React from "react";
import { Text, Button, LinkedAccount, AddAccount } from "../../components";
import { Container, DashBoard } from "./styled";

const LinkedAccounts = () => {
  return (
    <Container>
      <Text>권기훈 님의 계좌 관리</Text>
      <DashBoard>
        <Text theme="dashBoard">총 연결 계좌</Text>
        <Text theme="dashBoard">3 개 </Text>
      </DashBoard>
      <LinkedAccount />
      <AddAccount />
    </Container>
  );
};

export default LinkedAccounts;
