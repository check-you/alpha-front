import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const testAtom = atom({
  key: "test",
  default: 1,
});
export const signUpDataAtom = atom({
  key: "signUpData",
  default: {
    signUpInfo: [],
  },
  effects_UNSTABLE: [persistAtom],
});

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: sessionStorage,
});

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
  effects_UNSTABLE: [persistAtom],
});
