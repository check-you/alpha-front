import styled from "styled-components";

export const Container = styled.div`
  background: white;
  color: black;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 90vw;
  height: 10vh;
  margin-bottom: 2vh;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const TaxContainer = styled.div`
  background: white;
  color: black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80vw;
  height: 20vh;
`;

export const Wrapper3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

export const LogoImage = styled.img`
  margin: 1vw;
  width: 5vw;
  transition: transform 0.3s ease; /* 호버 시 애니메이션을 부드럽게 변경 */

  &:hover {
    transform: scale(1.1); /* 호버 시 이미지 크기를 확대 */
  }
`;
