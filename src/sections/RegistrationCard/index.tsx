import { Draggable } from "react-beautiful-dnd";
import * as S from "./styles";

import { RegistrationRead } from "~/types";

import Card from "~/components/Card";

import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
} from "react-icons/hi";

type RegistrationCardProps = {
  index: number;
  registration: RegistrationRead;
};

const RegistrationCard = ({ index, registration }: RegistrationCardProps) => {
  return (
    <Draggable draggableId={registration.id} index={index}>
      {(provided) => (
        <Card
          innerRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <S.IconAndText>
            <HiOutlineUser />
            <h3>{registration.employeeName}</h3>
          </S.IconAndText>
          <S.IconAndText>
            <HiOutlineMail />
            <p>{registration.email}</p>
          </S.IconAndText>
          <S.IconAndText>
            <HiOutlineCalendar />
            <span>{registration.admissionDate}</span>
          </S.IconAndText>
        </Card>
      )}
    </Draggable>
  );
};

export default RegistrationCard;
