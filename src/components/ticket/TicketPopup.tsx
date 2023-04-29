import { useRecoilValue } from "recoil";
import TicketPortal from "./TicketPopupPortal";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { TicketAtom } from "recoil/atoms/TicketAtom";
import { useTicket } from "hooks/UseTicket";
import TicketComponents from "./TicketPopup.styled";
import { Overlay } from "components/Overlay.styled";
import TicketThumbnailSrc from "assets/images/ticket_thumbnail.png";
import QrCode from "./qr-code/QrCode";

function TicketPopup() {
   const { isOpen } = useRecoilValue(TicketAtom);
   const [qrCode, setQrCode] = useState("");
   const { closeTicket, getTicketInfo } = useTicket();

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
      getTicketInfo().then((code) => setQrCode(code));
   }, []);

   return (
      <AnimatePresence>
         {isOpen && (
            <TicketPortal>
               <Overlay onClick={closeTicket} />
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
                     src={TicketThumbnailSrc}
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
                                 <span>발급 전</span>
                              </TicketComponents.TicketMainInfo>
                              <TicketComponents.TicketMainInfo>
                                 <h6>티켓 번호</h6>
                                 <span>1번</span>
                              </TicketComponents.TicketMainInfo>
                           </TicketComponents.TicketMainInfoContainer>
                           <TicketComponents.TicketQrCodeContainer>
                              <span>{qrCode}</span>
                              <QrCode ticketId={qrCode} />
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
