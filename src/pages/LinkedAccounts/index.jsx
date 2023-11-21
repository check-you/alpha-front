import React, { useEffect, useState } from "react";
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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [accountToDelete, setAccountToDelete] = useState(0);
  const [accountList, setAccountList] = useState([]);
  const navigate = useNavigate();
  const openDeleteModal = (accountN) => {
    setAccountToDelete(accountN); // 삭제할 계좌 번호 저장
    setIsDeleteModalOpen(true); // 모달 열기
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
  /////////////////////// 헤더에 토큰 넣기
  // const deleteAccountApi = async (accountToDelete, accessToken) => {
  //   axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  //   axiosInstance
  //     .delete("/api/accounts", { data: { account: accountToDelete } })
  //     .then((response) => {
  //       console.log(response.data);
  //       alert(`계좌 ${accountToDelete}가 삭제되었습니다.`);
  //       setIsDeleteModalOpen(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const deleteAccountApi = async (accountToDelete) => {
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
    deleteAccountApi(accountToDelete);
  };
  const addAccountHandler = () => {
    navigate("/addaccount");
  };

  const getTrnasactions = async () => {
    axiosInstance
      .get("/api/accounts/yoj9168@gmail.com")
      .then((response) => {
        console.log(response.data);
        setAccountList(response.data);
        alert("연결된 계좌 리스트!:D");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  ////////////////////////////////////
  // const fetchData = async () => {
  //   const accessToken = getAccessToken();

  //   if (accessToken) {
  //     // 토큰이 있다면 Axios 요청 설정
  //     try {
  //       const response = await axiosInstance.get("/api/accounts/yoj9168@gmail.com", {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`, // 헤더에 토큰 추가
  //         },
  //       });

  //       // 요청에 대한 처리
  //       console.log('데이터:', response.data);
  //       alert("연결된 계좌 리스트!:D");
  //     } catch (error) {
  //       // 오류 처리
  //       console.error('데이터 가져오기 오류:', error);
  //     }
  //   } else {
  //     // 토큰이 없을 때의 처리
  //     console.log('접근 토큰 없음.');
  //   }
  // };

  ///////////////////////////////////////////

  useEffect(() => {
    getTrnasactions();
    console.log(accountList);
  }, []);
  useEffect(() => {
    console.log(accountList, "업데이트됨!");
  }, accountList);
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
            <Text theme="dashBoardName">{accountList.name}권기훈</Text>
            <Text theme="dashBoardInfo"> 님의 계좌정보</Text>
          </NameWrapper>
          <NameWrapperbottom>
            <Text theme="dashBoard">
              총 연결 계좌 {accountList.listCnt}3 개
            </Text>
          </NameWrapperbottom>
        </TitleWrapper>
        {/* 계좌 리스트 api로 받아서 넣기 */}
        <AccountWrapper>
          <LinkedAccount deleteHandler={openDeleteModal} accountNum="222" />
          <LinkedAccount deleteHandler={openDeleteModal} accountNum="223" />
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
