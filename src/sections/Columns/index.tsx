import { DragDropContext, DropResult } from "@hello-pangea/dnd";

import { useRegistrationContext } from "@/contexts/registration";

import Column from "@/sections/Column";
import { useSnackbar } from "@/components/Snackbar";

import * as S from "./styles";

import { StatusEnum } from "@/types";

const Columns = () => {
  const { reviewRegistrations, approvedRegistrations, reprovedRegistrations, updateRegistrations } =
    useRegistrationContext();

  const { enqueueSnackbar } = useSnackbar();

  const onDragEnd = ({ destination, source }: DropResult) => {
    try {
      if (!destination) {
        return;
      }

      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return;
      }

      const sourceStatus = StatusEnum[source.droppableId as keyof typeof StatusEnum];

      const destinationStatus = StatusEnum[destination.droppableId as keyof typeof StatusEnum];

      const registrations = {
        [StatusEnum.REVIEW]: [...reviewRegistrations],
        [StatusEnum.APPROVED]: [...approvedRegistrations],
        [StatusEnum.REPROVED]: [...reprovedRegistrations],
      };

      const sourceRegistrations = registrations[sourceStatus];
      const destinationRegistrations = registrations[destinationStatus];

      const [draggedItem] = sourceRegistrations.splice(source.index, 1);
      destinationRegistrations.splice(destination.index, 0, draggedItem);

      sourceRegistrations.forEach((registration, index) => {
        registration.index = index;
        registration.status = sourceStatus;
      });

      destinationRegistrations.forEach((registration, index) => {
        registration.index = index;
        registration.status = destinationStatus;
      });

      updateRegistrations(
        registrations[StatusEnum.REVIEW],
        registrations[StatusEnum.APPROVED],
        registrations[StatusEnum.REPROVED]
      );

      enqueueSnackbar("Registro atualizado com sucesso!");
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Erro ao atualizar registro!", { variant: "error" });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <S.Columns data-testid="columns" direction="row" spacing="24px">
        <Column title="Revisão" status={StatusEnum.REVIEW} registrations={reviewRegistrations} />
        <Column
          title="Aprovado"
          status={StatusEnum.APPROVED}
          registrations={approvedRegistrations}
        />
        <Column
          title="Reprovado"
          status={StatusEnum.REPROVED}
          registrations={reprovedRegistrations}
        />
      </S.Columns>
    </DragDropContext>
  );
};

export default Columns;
