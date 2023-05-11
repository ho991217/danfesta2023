import { useRecoilValue } from "recoil";
import TicketPortal from "./TicketPopupPortal";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TicketAtom } from "recoil/atoms/TicketAtom";
import { useTicket } from "hooks/UseTicket";
import TicketComponents from "./TicketPopup.styled";
import { Overlay } from "components/Overlay.styled";
import Ticket1ThumbnailSrc from "assets/images/ticket_day1.png";
import Ticket2ThumbnailSrc from "assets/images/ticket_day2.png";
import QrCode from "./qr-code/QrCode";
import Tab from "components/tab/Tab";
import styled from "styled-components";

const TicketTabStyle = styled(motion.div).attrs({
   initial: { opacity: 0, translateX: "-50%" },
   animate: { opacity: 1, translateX: "-50%" },
   exit: { opacity: 0, translateX: "-50%" },
})`
   position: fixed;
   bottom: 0;
   left: 50%;
   width: calc(100% - 40px);
   max-width: 500px;
   z-index: 1000;
   display: flex;
   align-items: center;
   justify-content: center;
`;

function TicketPopup() {
   const { isOpen, info } = useRecoilValue(TicketAtom);
   const { closeTicket, getTicketInfo } = useTicket();
   const [selectedLabel, setSelectedLabel] = useState(1);

   useEffect(() => {
      const body = document.querySelector("body");
      const meta = document.querySelector("meta[name=theme-color]");

      if (!body || !meta) return;

      if (isOpen) {
         body.style.overflow = "hidden";
      } else {
         body.style.overflow = "auto";
      }
   }, [isOpen]);

   useEffect(() => {
      getTicketInfo();
   }, []);

   useEffect(() => {
      if (info.filter((i) => i.id !== 0).length === 1) {
         setSelectedLabel(info.findIndex((i) => i.id !== 0) + 1);
      } else {
         setSelectedLabel(1);
      }
   }, [info]);

   return (
      <AnimatePresence>
         {isOpen && (
            <TicketPortal>
               <Overlay onClick={closeTicket} />
               {info.filter((i) => i.id !== 0).length > 1 && (
                  <TicketTabStyle>
                     <Tab
                        labels={["1일차", "2일차"]}
                        selectedLabel={selectedLabel === 1 ? "1일차" : "2일차"}
                        onLabelClick={(label) => {
                           if (label === "1일차") {
                              setSelectedLabel(1);
                           } else {
                              setSelectedLabel(2);
                           }
                        }}
                     />
                  </TicketTabStyle>
               )}
               <TicketComponents.Container>
                  <TicketComponents.Garnish pos="top" looping>
                     <p>
                        위변조 방지 중입니다. 보안 정책에 따라 화면을 캡쳐하실
                        수 없습니다.
                     </p>
                     <p>
                        위변조 방지 중입니다. 보안 정책에 따라 화면을 캡쳐하실
                        수 없습니다.
                     </p>
                  </TicketComponents.Garnish>
                  <TicketComponents.TicketThumbnail
                     src={
                        selectedLabel === 1
                           ? Ticket1ThumbnailSrc
                           : selectedLabel === 2
                           ? Ticket2ThumbnailSrc
                           : ""
                     }
                     alt="티켓 썸네일"
                  />
                  <TicketComponents.TicketBody>
                     <TicketComponents.TicketBodyContentUpper>
                        <TicketComponents.TicketBodyBgUpper />
                        <TicketComponents.TicketBodyContent
                           style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                           }}
                        >
                           <TicketComponents.TicketMainInfoContainer>
                              <TicketComponents.TicketMainInfo>
                                 <h6>티켓팅 확인</h6>
                                 <span>사용 가능</span>
                              </TicketComponents.TicketMainInfo>
                              <TicketComponents.TicketMainInfo>
                                 <h6>팔찌 발급 여부</h6>
                                 <span>
                                    {info[selectedLabel - 1].distributed
                                       ? "발급 완료"
                                       : "발급 전"}
                                 </span>
                              </TicketComponents.TicketMainInfo>
                              <TicketComponents.TicketMainInfo>
                                 <h6>티켓 번호</h6>
                                 <span>{info[selectedLabel - 1].turn}번</span>
                              </TicketComponents.TicketMainInfo>
                           </TicketComponents.TicketMainInfoContainer>
                           <TicketComponents.TicketQrCodeContainer>
                              <span>{info[selectedLabel - 1].id}</span>
                              <QrCode ticketId={info[selectedLabel - 1].id} />
                           </TicketComponents.TicketQrCodeContainer>
                        </TicketComponents.TicketBodyContent>
                     </TicketComponents.TicketBodyContentUpper>
                     {window.matchMedia("(orientation: portrait)").matches && ( // portrait 모드에서만 렌더링
                        <TicketComponents.TicketBodyContentLower>
                           <TicketComponents.TicketBodyBgLower />
                           <TicketComponents.TicketBodyContent>
                              <TicketComponents.NoticeHeader>
                                 주의사항
                              </TicketComponents.NoticeHeader>
                              <TicketComponents.NoticeOl>
                                 <li>
                                    <span>
                                       본 티켓은 양도 및 판매가 불가능합니다.
                                    </span>
                                 </li>
                                 <li>
                                    <span>
                                       인식 시 단말기의 화면밝기를 최대로
                                       해주세요.
                                    </span>
                                 </li>
                                 <li>
                                    <span>
                                       문자 수신이 가능한 단말에서만 사용
                                       가능합니다.
                                    </span>
                                 </li>
                                 <li>
                                    <span>
                                       캡쳐된 티켓은 위변조로 인해 입장이
                                       불가능합니다.
                                    </span>
                                 </li>
                                 <li>
                                    <span>
                                       위 내용을 불이행시 불이익이 있을 수
                                       있습니다.
                                    </span>
                                 </li>
                              </TicketComponents.NoticeOl>
                           </TicketComponents.TicketBodyContent>
                        </TicketComponents.TicketBodyContentLower>
                     )}
                  </TicketComponents.TicketBody>
                  <TicketComponents.Garnish pos="bottom">
                     2023 DANFEST TICKET
                  </TicketComponents.Garnish>
               </TicketComponents.Container>
            </TicketPortal>
         )}
      </AnimatePresence>
   );
}

export default TicketPopup;
