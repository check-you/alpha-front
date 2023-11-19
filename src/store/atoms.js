import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const testAtom = atom({
  key: "test",
  default: 1,
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
      userSeq: -999,
      email: "",
      nickname: "",
      profile: "",
    },
  },
  effects_UNSTABLE: [persistAtom],
});
