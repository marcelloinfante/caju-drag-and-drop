import { Draggable } from "@hello-pangea/dnd";

import {
  HiCreditCard,
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineTrash,
  HiOutlineCalendar,
} from "react-icons/hi";

import { maskCpf } from "@/utils/cpfMask";

import { useRegistrationContext } from "@/contexts/registration";

import Typography from "@/components/Typography";
import { useSnackbar } from "@/components/Snackbar";

import * as S from "./styles";

import { RegistrationRead } from "@/types";

interface RegistrationCardProps {
  registration: RegistrationRead;
}

const RegistrationCard = ({ registration }: RegistrationCardProps) => {
  const { deleteRegistration } = useRegistrationContext();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeletion = () => {
    try {
      deleteRegistration(registration.id);
      enqueueSnackbar("Registro deletado com sucesso!");
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Erro ao deletar registro!", { variant: "error" });
    }
  };

  return (
    <Draggable draggableId={registration.id} index={registration.index}>
      {(provided) => (
        <S.RegistrationCard
          data-testid="registration-card"
          innerRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <S.TextAndDeletion>
            <S.IconAndText>
              <HiOutlineUser />
              <Typography variant="h4">{registration.name}</Typography>
            </S.IconAndText>
            <HiOutlineTrash
              data-testid="registration-card-delete"
              style={{ cursor: "pointer" }}
              onClick={handleDeletion}
            />
          </S.TextAndDeletion>
          <S.IconAndText>
            <HiCreditCard />
            <Typography>{maskCpf(registration.cpf)}</Typography>
          </S.IconAndText>
          <S.IconAndText>
            <HiOutlineMail />
            <Typography>{registration.email}</Typography>
          </S.IconAndText>
          <S.IconAndText>
            <HiOutlineCalendar />
            <Typography>{registration.date}</Typography>
          </S.IconAndText>
        </S.RegistrationCard>
      )}
    </Draggable>
  );
};

export default RegistrationCard;
