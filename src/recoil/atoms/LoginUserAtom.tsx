import { atom } from "recoil";

export const LoginInUserAtom = atom({
   key: "userAtom",
   default: {
      username: "",
      nickname: "",
      studentId: "",
      major: "",
      department: "",
      admin: false,
   },
});
