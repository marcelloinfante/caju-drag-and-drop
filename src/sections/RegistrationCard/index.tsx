import { Draggable } from "react-beautiful-dnd";

import {
  HiCreditCard,
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineTrash,
  HiOutlineCalendar,
} from "react-icons/hi";

import { useRegistrationContext } from "~/contexts/registration/hook";

import { RegistrationRead } from "~/types";

import Typography from "~/components/Typography";
import { maskCpf } from "~/utils/cpfMask";

import * as S from "./styles";
import { RegistrationCardMain } from "./styles";

type RegistrationCardProps = {
  registration: RegistrationRead;
};

const RegistrationCard = ({ registration }: RegistrationCardProps) => {
  const { deleteRegistration } = useRegistrationContext();

  return (
    <Draggable draggableId={registration.id} index={registration.index}>
      {(provided) => (
        <RegistrationCardMain
          innerRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <S.TextAndDeletion>
            <S.IconAndText>
              <HiOutlineUser />
              <Typography variant="h4">{registration.employeeName}</Typography>
            </S.IconAndText>
            <HiOutlineTrash
              style={{ cursor: "pointer" }}
              onClick={() => deleteRegistration(registration.id)}
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
            <Typography>{registration.admissionDate}</Typography>
          </S.IconAndText>
        </RegistrationCardMain>
      )}
    </Draggable>
  );
};

export default RegistrationCard;
