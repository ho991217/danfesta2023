import { IRoutePath } from "routes/IRoutePath";

export interface NavHeader {
   path: string;
   title: string;
   empTitle?: string;
   subTitle: string;
}

export const NAV_HEADER: NavHeader[] = [
   {
      path: IRoutePath["HOME"],
      title: "DANFESTA",
      empTitle: "波浪",
      subTitle: "2023 단국대학교 대동제 '파랑'",
   },
   {
      path: IRoutePath["LINEUP"] + "/1",
      title: "ARTIST LINE-UP",
      subTitle: "2023 단페스타 아티스트 라인업",
   },
   {
      path: IRoutePath["LINEUP"] + "/2",
      title: "ARTIST LINE-UP",
      subTitle: "2023 단페스타 아티스트 라인업",
   },
   {
      path: IRoutePath["TICKET"],
      title: "모바일 티켓",
      subTitle: "모바일 티켓입니다.",
   },
   {
      path: IRoutePath["LIVEMAP"],
      title: "BOOTH MAP",
      subTitle: "2023 단페스타 라이브맵",
   },
   {
      path: IRoutePath["ADMIN"],
      title: "관리자 페이지",
      subTitle: "담총 화이팅",
   },
];
