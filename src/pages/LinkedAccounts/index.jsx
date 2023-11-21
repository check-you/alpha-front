import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { loginUserEmail } from "../../store/atoms";
import { axiosInstance } from "../../apis";
import { useNavigate } from "react-router-dom";
import {
  Text,
  LinkedAccount,
  AddAccountBtn,
  HomeAppBar,
  SelectModal,
} from "../../components";
import {
  Container,
  TitleWrapper,
  NameWrapper,
  Image,
  ContentWrapper,
  NameWrapperbottom,
  AccountWrapper,
  AddBtnWrapper,
} from "./styled";
const LinkedAccounts = () => {
  const getUserEmail = useRecoilValue(loginUserEmail);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [accountToDelete, setAccountToDelete] = useState(0);
  const [updateAcc, setUpdateAcc] = useState([]);
  const [accounts, setAccounts] = useState({});
  const [accountsData, setAccountsData] = useState({});
  const navigate = useNavigate();
  const openDeleteModal = (accountN) => {
    setAccountToDelete(accountN); // 삭제할 계좌 번호 저장
    setIsDeleteModalOpen(true); // 모달 열기
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
  const deleteAccountApi = async (accountToDelete, token) => {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axiosInstance
      .delete("/api/accounts", { data: { account: accountToDelete } })
      .then((response) => {
        console.log("삭제~");
      })
      .catch((e) => {
        console.log(e);
      });
    alert("계좌 가 삭제되었습니다."); // 계좌 삭제 알림
    setIsDeleteModalOpen(false);
  };

  const handleDelete = () => {
    console.log(getUserEmail, "유저이메일~~~~~~");
    const token = document.cookie // 쿠키 값 가져오기
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    if (token) {
      deleteAccountApi(accountToDelete, token)
        .then(() => {
          console.log("삭제 후, 화면 다시그리는 거 ");
          getTrnasactions(token);
        })
        .catch((error) => {
          console.log("계좌 삭제 오류:", error);
        });
      setIsDeleteModalOpen(false);
      // 쿠키에 토큰 값이 있다면 수행할 작업
      console.log("쿠키에 저장된 토큰:", token);
      // 여기서 원하는 로직을 작성하세요
    } else {
      // 쿠키에 토큰 값이 없을 때의 처리
      console.log("쿠키에 저장된 토큰이 없습니다.");
    }
  };

  const addAccountHandler = () => {
    navigate("/addaccount");
  };

  const getTrnasactions = async (token) => {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axiosInstance
      .get(`/api/accounts/${getUserEmail}`)
      .then((response) => {
        console.log(response, "response 그냥 ");
        console.log(response.data, "response + data ");
        console.log(response.data.data, "response + data + data ");
        console.log(response.data.data.data, "response + data + data +data");
        setAccountsData(response.data.data);
        alert("연결된 계좌 리스트!:D");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    console.log(getUserEmail, "유저이메일~~~~~~");
    const token = document.cookie // 쿠키 값 가져오기
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    if (token) {
      getTrnasactions(token);
      // 쿠키에 토큰 값이 있다면 수행할 작업
      console.log("쿠키에 저장된 토큰:", token);
      // 여기서 원하는 로직을 작성하세요
    } else {
      // 쿠키에 토큰 값이 없을 때의 처리
      console.log("쿠키에 저장된 토큰이 없습니다.");
    }
  }, []);

  useEffect(() => {
    console.log(accountsData, "어카운츠-데이터");
    if (accountsData) {
      // accountsData가 존재할 때만 해당 속성을 참조하도록 수정
      console.log(accountsData.name, "이름");
      console.log(accountsData.listCnt, "갯수");
      console.log(accountsData.accountList, "계좌리스트");
    }
  }, [accountsData]);
  return (
    <Container>
      {isDeleteModalOpen && (
        <SelectModal
          btnContent="삭제"
          closeHandler={closeDeleteModal}
          okHandler={handleDelete}
        >
          삭제하시겠습니까?
        </SelectModal>
      )}
      <HomeAppBar label="계좌 관리" />
      <ContentWrapper>
        <TitleWrapper>
          <NameWrapper>
            <Text theme="dashBoardName">{accountsData.name}</Text>
            <Text theme="dashBoardInfo"> 님의 계좌정보</Text>
          </NameWrapper>
          <NameWrapperbottom>
            <Text theme="dashBoard">
              총 연결 계좌 {accountsData.listCnt} 개
            </Text>
          </NameWrapperbottom>
        </TitleWrapper>
        <AccountWrapper>
          {accountsData.accountList &&
            accountsData.accountList.map((item, index) => (
              <LinkedAccount
                key={index}
                deleteHandler={openDeleteModal}
                bank={item.bank}
                account={item.account}
                category={item.category}
              />
            ))}
          {/* <LinkedAccount deleteHandler={openDeleteModal} accountNum="222" />
          <LinkedAccount deleteHandler={openDeleteModal} accountNum="223" /> */}
          {/* 여기에 들어갈 내용 1. 금융기관 bank 2. 상품명 category 3. 계좌번호 accountNum */}
        </AccountWrapper>
      </ContentWrapper>
      <AddBtnWrapper>
        <AddAccountBtn onClick={addAccountHandler} />
      </AddBtnWrapper>
    </Container>
  );
};

export default LinkedAccounts;
