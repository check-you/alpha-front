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
