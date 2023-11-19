// styled.js 파일

import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LogoImage = styled.img`
  width: 35vw;
  height: 30vh;
`;
export const Image = styled.img`
  width: 10vw;
  height: 7vh;
`;

export const Button = styled.button`
  margin-bottom: 5vh;
  background-color: #bb84e8;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 82vw;
  height: 10vh;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 10vh;
`;

export const LinkButton = styled.a`
  display: inline-block;
  margin-right: 10px;
  text-decoration: none;
  color: #333;
  font-weight: bold; /* 공통 스타일 적용 */
`;

export const BoldLink = styled(LinkButton)`
  color: #6f1c7e; /* 진한 보라색 */
`;

export const ThinLink = styled(LinkButton)`
  font-weight: normal; /* 얇은 글자 굵기 */
`;

export const SignupWrapper = styled.div`
  width: 80vw;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  border: 1px solid #9747ff;
  border-radius: 10px;
  padding: 3px;
  margin: 1vh;
`;

export const SignUpInput = styled.input`
  border: none;
  width: 70vw;
  border-radius: 2px;
  height: 7vh;
  font-size: 0.8rem;
  padding: 0 8px;
  box-sizing: border-box;
  &::placeholder {
    color: #d9d9d9;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  width: 80vw;
  font-size: 12px;
  height: 8vh;
`;
