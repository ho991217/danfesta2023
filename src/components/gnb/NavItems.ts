import { IRoutePath } from "routes/IRoutePath";

interface NavItemType {
   id: number;
   name: string;
   path: string;
}

export const NavItems: NavItemType[] = [
   {
      id: 1,
      name: "홈",
      path: IRoutePath["HOME"],
   },
   {
      id: 2,
      name: "라인업",
      path: IRoutePath["LINEUP"],
   },
   {
      id: 4,
      name: "이벤트",
      path: IRoutePath["EVENTS"],
   },
   {
      id: 5,
      name: "부스 라이브맵",
      path: IRoutePath["LIVEMAP"],
   },
   {
      id: 6,
      name: "공지사항",
      path: IRoutePath["NOTICE"],
   },
];
