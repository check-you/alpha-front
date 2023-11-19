import React from "react";
import { Button } from "../../components";
import { Container } from "./styled";

const NotFound = () => {
  return (
    <Container>
      찾지못했습니다.
      <Button theme="messageNo">아이에게 메세지를 남기세요</Button>
    </Container>
  );
};

export default NotFound;
