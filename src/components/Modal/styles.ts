import styled from "styled-components";

import Card from "@/components/Card";
import { sizes } from "@/theme/responsive";

export const ModalContainer = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  position: fixed;
`;

export const ModalBackground = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled(Card)`
  top: 50%;
  left: 50%;
  height: auto;
  box-shadow: none;
  width: ${sizes.sm};
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const ModalContent = styled(Card)`
  top: 50%;
  left: 50%;
  height: auto;
  width: ${sizes.sm};
  box-shadow: none;
  position: absolute;
  transform: translate(-50%, -50%);
`;
