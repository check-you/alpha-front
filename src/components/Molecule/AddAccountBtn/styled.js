import styled from "styled-components";

export const Container = styled.div`
  background: #bb84e8;
  color: black;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90vw;
  padding: 2vh 1vw;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    transform: scale(1.01); /* 호버 시 이미지 크기를 확대 */
  }
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
`;
