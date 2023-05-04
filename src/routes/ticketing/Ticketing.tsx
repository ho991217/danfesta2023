import Tab from "components/tab/Tab";
import TicketingComponent from "./components/Ticketing.styled";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Thumbnail17 from "assets/images/ticket_day1.png";
import Thumbnail18 from "assets/images/ticket_day2.png";
import Button from "components/button/Button";
import Input from "components/input/Input";
import { useLogin } from "hooks/UseLogin";
import { useErrorModal } from "hooks/UseErrorModal";
import axios from "axios";
import { EVENTID } from "eventId";
import { useModal } from "hooks/UseModal";
import { useNavigate } from "react-router-dom";

function Ticketing() {
   const [selectedLabel, setSelectedLabel] = useState<EVENTID>(
      EVENTID["1일차"]
   );
   const [isAgreed, setIsAgreed] = useState(false);
   const [captchaCode, setCaptchaCode] = useState("");
   const [captchaKey, setCaptchaKey] = useState("");
   const [captchaImage, setCaptchaImage] = useState("");
   const [canSubmit, setCanSubmit] = useState(false);
   const { authenicate } = useLogin();
   const { openErrorModal } = useErrorModal();
   const { openModal } = useModal();
   const navigate = useNavigate();

   useEffect(() => {
      authenicate(() => {
         fetchCaptcha();
      });
   }, []);

   useEffect(() => {
      setCanSubmit(isAgreed && captchaCode.length > 0);
   }, [isAgreed, captchaCode]);

   const requestCaptchaKey = async () => {
      try {
         const { data } = await axios({
            method: "get",
            url: "/ticket/captcha/key",
         });
         setCaptchaKey(data.key);
         return data.key;
      } catch {
         openErrorModal({
            errorMsg: "캡차 키를 받아오는데 실패했습니다.",
         });
         return null;
      }
   };

   const requestCaptchaImage = async ({
      captchaKey,
   }: {
      captchaKey: string;
   }) => {
      try {
         const { data } = await axios({
            method: "get",
            url: `/ticket/captcha/image/${captchaKey}`,
            responseType: "arraybuffer",
         });

         return data;
      } catch {
         openErrorModal({
            errorMsg: "캡차 이미지를 받아오는데 실패했습니다.",
         });
      }
   };

   const fetchCaptcha = async () => {
      const key = await requestCaptchaKey();

      if (key.length > 0) {
         const image = await requestCaptchaImage({ captchaKey: key });
         const base64 = btoa(
            new Uint8Array(image).reduce(
               (data, byte) => data + String.fromCharCode(byte),
               ""
            )
         );
         setCaptchaImage(base64);
      }
   };

   const registerTicket = async () => {
      try {
         const { data } = await axios({
            method: "post",
            url: "/ticket",
            data: {
               eventId: selectedLabel,
               captchaKey,
               captchaValue: captchaCode,
            },
         });
         openModal({
            title: "신청이 완료되었습니다.",
            body: (
               <div>
                  {`${selectedLabel === EVENTID["1일차"] ? "17" : "18"}일 (${
                     selectedLabel === EVENTID["1일차"] ? "1" : "2"
                  }일차) 단국존 티켓 신청이 성공적으로 완료되었습니다. 티켓팅 승인 결과가 등록된 휴대전화번호의 SMS로 전송됩니다.
            `}
                  <br />
                  <br />
                  티켓팅 번호: <b>{data.turn}</b>번
               </div>
            ),
            declineText: "",
            acceptText: "확인",
            onAccept: () => {
               navigate("/");
            },
         });
      } catch (e) {
         const { response } = e as any;

         openErrorModal({
            errorMsg: response.data.message[0],
         });
         fetchCaptcha();
         setCaptchaCode("");
      }
   };

   return (
      <TicketingComponent.Container>
         <Tab
            labels={["17일 티켓", "18일 티켓"]}
            selectedLabel={
               selectedLabel === EVENTID["1일차"] ? "17일 티켓" : "18일 티켓"
            }
            onLabelClick={(label) => {
               setSelectedLabel(
                  label === "17일 티켓" ? EVENTID["1일차"] : EVENTID["2일차"]
               );
            }}
         />
         <AnimatePresence initial={false} mode="wait">
            {selectedLabel === EVENTID["1일차"] ? (
               <TicketingComponent.TicketThumbnail
                  key="17일 티켓"
                  src={Thumbnail17}
                  alt="17일 티켓"
                  layoutId="17일 티켓"
               />
            ) : (
               <TicketingComponent.TicketThumbnail
                  key="18일 티켓"
                  src={Thumbnail18}
                  alt="18일 티켓"
                  layoutId="18일 티켓"
               />
            )}
         </AnimatePresence>
         <TicketingComponent.Body>
            <div>
               <h6>주의사항</h6>
               <TicketingComponent.P>
                  * 단국대학교 죽전캠퍼스 재학생(졸업생, 휴학생 불가)만 신청할
                  수 있습니다.
                  <br />* 이름, 학번, 학과, 전화번호를 홈페이지 가입시
                  전화번호를 잘못 입력한 경우 이벤트 참여에 불이익이 발생할 수
                  있습니다.
                  <br />* 비인가 프로그램(매크로 등) 을 사용하여 비정상적인
                  경로로 티켓팅을 시도한 경우, 고지없이 이벤트 참여에서
                  제외됩니다.
                  <br />* 신청 후 티켓 양도 및 취소는 불가능합니다.
                  <br />* 17일, 18일 양일 중복 신청 가능하며, 1인당 예매 가능한
                  티켓의 개수는 각 일마다 1개입니다.
                  <br />* "2023년 05월 17일" 단국존 선예매 티켓팅임을
                  확인했습니다.
               </TicketingComponent.P>
            </div>
            <h6>부정 거래 관련 방침 안내</h6>
            <TicketingComponent.Terms>
               본 공연의 주최자인 단국대학교 55대 담다 총학생회는 &lt;2023
               DANFESTA 波:浪&gt;의 공식 예매처(단국대학교 홈페이지)가 아닌 다른
               경로로 구매/취득한 티켓 중에서 매크로 등의 부정 한 방법으로
               예매하거나 프리미엄 거래 사이트 및 개인 SNS 등에서 매매되는 티켓
               및 팔찌를 모두 부정 거래로 간주하고, 이에 대해 엄격히 대처하고자
               합니다.
               <br /> 따라서, 아래와 같이 부정 거래 방침에 대해 사전 안내
               드리오니 추후 불이익을 당하지 않도록 학우 여러분들의 유의와
               양해를 부탁드립니다. <br />본 공연은 예매자 본인이 직접
               예매하셔야 하며, 대리 예매 시도 및 양도 등으로 불이익 이 발생할
               수 있습니다.
               <br />
               비정상적이거나 부정한 방법 (예: 매크로 사용 등)을 이용하거나,
               안내된 유의사항을 지키지 않아 발생하는 모든 문제에 대해 총학생회,
               총학생회 홈페이지 관리자는 일절 책임이 없으며, 해결의 주체가 될
               수 없음을 알려드리오니 이와 관련한 불 이익을 당하지 않도록 각별히
               주의하시기 바랍니다. <br />
               <br />
               해당 사유로 발생한 부정 거래는 사전 통보 없이 예매 취소 및
               현장에서 사용 제한됩니다. <br />
               <br />① 프리미엄 거래 사이트 및 개인 SNS 등에서 부정 티켓 및 팔찌
               거래가 확인되는 경우, 티켓의 정보를 확인한 후 해당 티켓에 대한
               예매를 취소할 예정입니다. 또한, 해당 예매자는 총학생회에서
               주최하는 모든 행사의 참여 및 상품 수령이 제한될 예정입니다.{" "}
               <br />
               <br />② 매크로, 프리미엄 대리 예매 등을 이용한 부정한 방법으로
               거래되는 행위를 예방하고자 총학생회는 총학생회 홈페이지 관리자와
               긴밀한 협의를 하고 있습니다. 부정 예매로 인한 불이익을 당하지
               않도록 학우 여러분들의 사전 유의 부탁드립니다.
               <br />
               <br />③ 예매 정보가 담긴 이미지 및 수령한 티켓 이미지를
               양도하거나 제3자에게 전달/제공 하는 경우 위조 예매로 간주하여
               부정 티켓 거래로 간주될 시 해당 예매가 취소 처리될 수 있으니
               유의하시길 바랍니다. <br />
               <br />
               어떠한 이유를 막론하고 부정 예매, 부정 거래로 간주되는 건의 해당
               티켓은 사전 안내 없이 취소됩니다. 또한 당일 팔찌를 소지하고
               있더라도 입장이 제한될 수 있습 니다.
            </TicketingComponent.Terms>
            <TicketingComponent.AgreeContainer>
               <TicketingComponent.Checkbox
                  checked={isAgreed}
                  onChange={() => {
                     setIsAgreed((prev) => !prev);
                  }}
               />
               위 안내사항들을 모두 숙지하였으며, 이에 동의합니다.
            </TicketingComponent.AgreeContainer>
            <TicketingComponent.CaptchaContainer>
               <TicketingComponent.Captcha
                  src={`data:image/jpeg;charset=utf-8;base64,${captchaImage}`}
                  alt="캡차 이미지"
               />
               <TicketingComponent.Refetch onClick={fetchCaptcha}>
                  CAPTCHA<span>새로고침</span>
               </TicketingComponent.Refetch>
            </TicketingComponent.CaptchaContainer>
            <Input
               style={{ width: "100%", margin: "10px 0 20px 0" }}
               value={captchaCode}
               placeholder="CAPTCHA 입력"
               onChange={(e) => {
                  setCaptchaCode(e.target.value);
               }}
            />
            <Button
               color="#0262E9"
               textColor="white"
               disabled={!canSubmit}
               onClick={registerTicket}
            >
               신청하기
            </Button>
         </TicketingComponent.Body>
      </TicketingComponent.Container>
   );
}

export default Ticketing;
