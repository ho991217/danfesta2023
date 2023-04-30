interface NavItemType {
   id: number;
   name: string;
   path: string;
}

export const NavItems: NavItemType[] = [
   {
      id: 1,
      name: "홈",
      path: "/",
   },
   {
      id: 2,
      name: "라인업",
      path: "/lineup",
   },
   {
      id: 3,
      name: "티켓팅",
      path: "/ticketing",
   },
   {
      id: 4,
      name: "이벤트",
      path: "/event",
   },
   {
      id: 5,
      name: "부스 라이브맵",
      path: "/booth-map",
   },
   {
      id: 6,
      name: "공지사항",
      path: "/notice",
   },
];
