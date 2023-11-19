import React from "react";
import Logo from "../../assets/images/logo.svg";

import { Container, Image } from "./styled";

const Main = () => {
  return (
    <Container>
      메인페이지입니다
      <Image src={Logo} alt="로고이미지" />
    </Container>
  );
};

export default Main;
