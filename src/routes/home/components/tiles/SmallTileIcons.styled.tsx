import { ReactComponent as TicketIcon } from "assets/icons/ticket.svg";
import { ReactComponent as EventIcon } from "assets/icons/star.svg";
import { ReactComponent as LiveMapIcon } from "assets/icons/location.svg";
import { ReactComponent as NoticeIcon } from "assets/icons/bell.svg";
import styled from "styled-components";
import { motion } from "framer-motion";

const AnimatedTicketIcon = styled(motion(TicketIcon))``;

const AnimatedEventIcon = styled(motion(EventIcon)).attrs({
   animate: {
      rotate: [0, 360],
   },
   transition: {
      duration: 1.5,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1.5,
   },
})``;

const AnimatedLiveMapIcon = styled(motion(LiveMapIcon)).attrs({
   animate: {
      translateX: [0, 0, 1, 0, -1, 0, 0],
      translateY: [0, 1, 0, -1, 0, 1, 0],
   },
   transition: {
      duration: 3,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
   },
})``;

const AnimatedNoticeIcon = styled(motion(NoticeIcon)).attrs({
   animate: {
      rotate: [0, 10, -10, 10, 0],
   },
   transition: {
      duration: 0.5,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1.5,
   },
})``;

const AnimatedIcons = {
   Ticket: AnimatedTicketIcon,
   Event: AnimatedEventIcon,
   LiveMap: AnimatedLiveMapIcon,
   Notice: AnimatedNoticeIcon,
};

export default AnimatedIcons;
