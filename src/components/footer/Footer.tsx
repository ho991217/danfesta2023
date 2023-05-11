import FooterComponent from "./Footer.styled";
import DamdaLogo from "assets/images/damda_logo.png";
import PR6Logo from "assets/images/pr6_logo.png";

function Footer() {
   return (
      <FooterComponent.Container>
         <FooterComponent.Title>
            DANDESTA <b>'波浪'</b>
         </FooterComponent.Title>
         <FooterComponent.P>
            주소: 경기도 용인시 수지구 죽전동 1491 단국대학교 혜당관 406호
            총학생회실
            <br /> 전화: 031)8005-2680~1 | 이메일: dkudamda@gmail.com
         </FooterComponent.P>
         <FooterComponent.P>
            <b>웹서비스 제작사</b> | 크로아 크리에이티브 (프로젝트6)
            <br /> <b>UXUI 디자인</b> | 크로아 크리에이티브 CEO 강우주
            <br /> <b>프론트엔드 엔지니어</b> | 단국대학교 / 크로아 크리에이티브
            CTO 이호연
            <br /> <b>백엔드 엔지니어</b> | 단국대학교 이현, 세종대학교 윤승환
            <br /> <b>프로젝트 매니저</b> | 단국대학교 박찬진
         </FooterComponent.P>
         <FooterComponent.Ul>
            <FooterComponent.Li>
               <a href="https://dkustu.com/term">이용약관</a>
            </FooterComponent.Li>
            <FooterComponent.Li>
               <a href="https://dkustu.com/privacy-policy">개인정보처리방침</a>
            </FooterComponent.Li>
            <FooterComponent.Li>
               <a href="https://www.instagram.com/dku_damda">
                  학생회 인스타그램
               </a>
            </FooterComponent.Li>
            <FooterComponent.Li>
               <a href="https://pr6.kr">제작사 홈페이지</a>
            </FooterComponent.Li>
         </FooterComponent.Ul>
         <FooterComponent.Copyright>ⓒ DKU DAMDA, PR6</FooterComponent.Copyright>
         <FooterComponent.Logo src={DamdaLogo} alt="담다 로고" />
         <FooterComponent.Logo src={PR6Logo} alt="pr6 로고" />
      </FooterComponent.Container>
   );
}

export default Footer;
