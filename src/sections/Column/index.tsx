import { Droppable } from "react-beautiful-dnd";

import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";

import { RegistrationRead, StatusEnum } from "~/types";

type ColumnProps = {
  title: string;
  status: StatusEnum;
  registrations: RegistrationRead[];
};
const Collumn = ({ title, status, registrations }: ColumnProps) => {
  return (
    <S.Column status={status}>
      <S.TitleColumn status={status}>{title}</S.TitleColumn>
      <Droppable droppableId={status}>
        {(provided) => (
          <S.CollumContent
            key={title}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {registrations.map((registration, index) => {
              return (
                <RegistrationCard
                  index={index}
                  key={registration.id}
                  registration={registration}
                />
              );
            })}
            {provided.placeholder}
          </S.CollumContent>
        )}
      </Droppable>
    </S.Column>
  );
};
export default Collumn;
