import { HTMLAttributes } from "react";

import { action } from "@/theme/palette";

import Stack from "@/components/Stack";
import Button from "@/components/Button";
import Typography from "@/components/Typography";

import * as S from "./styles";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  title: string;
  buttonTitle: string;
  onClose: () => void;
  onButtonClick: () => void;
}

const Modal = ({ children, open, title, buttonTitle, onClose, onButtonClick }: ModalProps) => {
  const handleOnClick = () => {
    onClose();
    onButtonClick();
  };

  if (!open) {
    return <></>;
  }

  return (
    <S.ModalContainer data-testid="modal">
      <S.ModalBackground onClick={onClose} />
      <S.Modal>
        <Stack direction="column" spacing="16px">
          <Typography variant="h3">{title}</Typography>
          {children}
          <Stack
            direction="row"
            spacing="16px"
            style={{ justifyContent: "flex-end", marginTop: "16px" }}
          >
            <Button onClick={onClose} style={{ height: "45px", backgroundColor: action.disabled }}>
              Cancelar
            </Button>
            <Button onClick={handleOnClick} style={{ height: "45px" }}>
              {buttonTitle}
            </Button>
          </Stack>
        </Stack>
      </S.Modal>
    </S.ModalContainer>
  );
};

export default Modal;
