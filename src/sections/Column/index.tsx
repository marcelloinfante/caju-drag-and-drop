import { Droppable } from "react-beautiful-dnd";

import { registrationColumns } from "@/theme/palette";
import { RegistrationRead, StatusEnum } from "@/types";

import Typography from "@/components/Typography";
import RegistrationCard from "@/sections/RegistrationCard";

import * as S from "./styles";

export interface ColumnProps {
  title: string;
  status: StatusEnum;
  registrations: RegistrationRead[];
}

const Column = ({ title, status, registrations }: ColumnProps) => {
  const { color, backgroundColor } = registrationColumns[status];

  return (
    <S.Column data-testid="column" style={{ backgroundColor }}>
      <Typography variant="h3" color={color}>
        {title}
      </Typography>
      <Droppable droppableId={status}>
        {(provided) => (
          <S.ColumnContent ref={provided.innerRef} {...provided.droppableProps}>
            {registrations.map((registration) => {
              return <RegistrationCard key={registration.id} registration={registration} />;
            })}
            {provided.placeholder}
          </S.ColumnContent>
        )}
      </Droppable>
    </S.Column>
  );
};

export default Column;
