import { atom } from "recoil";
// import { recoilPersist } from "recoil-persist";

export const testAtom = atom({
  key: "test",
  default: 1,
});
export const loginUserEmail = atom({
  key: "loginUserEmail",
  default: "",
});
export const isLoginAtom = atom({
  key: "isLoginAtom",
  default: false,
});
export const signUpDataAtom = atom({
  key: "signUpData",
  default: {
    name: "",
    phoneNumber: 0,
    email: "",
    password: 0,
  },
  // effects_UNSTABLE: [persistAtom],
});

export const transactionFromApi = atom({
  key: "transactionApis",
  default: {
    name: "",
    bank: "",
    account: "",
    transactionList: [],
  },
});

// const { persistAtom } = recoilPersist({
//   key: "recoil-persist",
//   storage: sessionStorage,
// });

export const loginState = atom({
  key: "loginState",
  default: {
    isLogin: false,
    userInfo: {
      email: "",
      username: "",
      phone: "",
    },
  },
  // effects_UNSTABLE: [persistAtom],
});

export const financialInstitutionState = atom({
  key: "financialInstitutionState",
  default: "",
});

export const transactionNumberState = atom({
  key: "transactionNumberState",
  default: "",
});
