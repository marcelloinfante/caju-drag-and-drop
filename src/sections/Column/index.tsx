import { Droppable } from "react-beautiful-dnd";

import { registrationColumns } from "~/theme/palette";
import { RegistrationRead, StatusEnum } from "~/types";

import Typography from "~/components/Typography";
import RegistrationCard from "~/sections/RegistrationCard";

import * as S from "./styles";

type ColumnProps = {
  title: string;
  status: StatusEnum;
  registrations: RegistrationRead[];
};

const Collumn = ({ title, status, registrations }: ColumnProps) => {
  const { color, backgroundColor } = registrationColumns[status];

  console.log(registrations);

  return (
    <S.Column style={{ backgroundColor }}>
      <Typography variant="h3" color={color}>
        {title}
      </Typography>
      <Droppable droppableId={status}>
        {(provided) => (
          <S.CollumContent ref={provided.innerRef} {...provided.droppableProps}>
            {registrations.map((registration) => {
              return (
                <RegistrationCard
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
