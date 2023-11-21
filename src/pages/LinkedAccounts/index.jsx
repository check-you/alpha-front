import React, { useEffect, useState } from "react";
import { useRecoilValue , useSetRecoilState} from "recoil";
import { loginUserEmail , isLoginAtom } from "../../store/atoms";
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
  Logout,
  Link,
} from "./styled";
import { async } from "q";
const LinkedAccounts = () => {
  const setIsLoginFalse = useSetRecoilState(isLoginAtom);
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
      .delete("/api/accounts", { account: accountToDelete })
      .then((response) => {
        console.log(response.data);
        alert("연결된 계좌 리스트!:D");
      })
      .catch((e) => {
        console.log(e);
      });
    alert(`계좌 ${accountToDelete}가 삭제되었습니다.`); // 계좌 삭제 알림
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
        console.log(response.data);
        setAccountsData(response.data.data);
        setAccounts(response);
        alert("연결된 계좌 리스트!:D");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const logoutHandler = async() => {
    // Delete token from cookies
    setIsLoginFalse(false);
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Redirect to the main page
    navigate("/");
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
    console.log(accountsData.name, "이름");
    console.log(accountsData.listCnt, "갯수");
    console.log(accountsData.accountList, "계좌리스트");
    console.log(accountsData.accountList[1].account, "계좌리스트[1]");
  }, [accounts, accountsData]);
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
            <Text theme="dashBoardName">{accountsData.name}권기훈</Text>
            <Text theme="dashBoardInfo"> 님의 계좌정보</Text>
          </NameWrapper>
          <Link to="/" onClick={logoutHandler}>
            <Logout >로그아웃</Logout>
          </Link>
          <NameWrapperbottom>
            <Text theme="dashBoard">
              총 연결 계좌 {accountsData.listCnt}3 개
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
                accountNum={item.account}
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
