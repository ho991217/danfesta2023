import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      letter-spacing: -2% ; /* 자간 적용 안됨 */
   }
   body {
      font-family: 'Noto Sans KR', sans-serif;
      background-color: #f5f5f5;
      overflow-x: hidden;
      max-width: 500px;
      margin: 0 auto;
   }
`;
