import { DragDropContext, DropResult } from "react-beautiful-dnd";

import Collumn from "../Column";

import { StatusEnum } from "~/types";
import { useRegistrationContext } from "~/contexts/registration/hook";

import Stack from "~/components/Stack";

const Collumns = () => {
  const {
    reviewRegistrations,
    approvedRegistrations,
    reprovedRegistrations,
    updateRegistration,
    updateRegistrations,
  } = useRegistrationContext();

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceStatus =
      StatusEnum[source.droppableId as keyof typeof StatusEnum];

    const destinationStatus =
      StatusEnum[destination.droppableId as keyof typeof StatusEnum];

    const registrations = {
      [StatusEnum.REVIEW]: [...reviewRegistrations],
      [StatusEnum.APPROVED]: [...approvedRegistrations],
      [StatusEnum.REPROVED]: [...reprovedRegistrations],
    };

    const sourceRegistrations = registrations[sourceStatus];
    const destinationRegistrations = registrations[destinationStatus];

    const [draggedItem] = sourceRegistrations.splice(source.index, 1);
    destinationRegistrations.splice(destination.index, 0, draggedItem);

    draggedItem.status = destinationStatus;

    updateRegistration(draggedItem);

    updateRegistrations(
      registrations[StatusEnum.REVIEW],
      registrations[StatusEnum.APPROVED],
      registrations[StatusEnum.REPROVED]
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Stack direction="row" spacing="24px">
        <Collumn
          title="Pronto para revisar"
          status={StatusEnum.REVIEW}
          registrations={reviewRegistrations}
        />
        <Collumn
          title="Aprovado"
          status={StatusEnum.APPROVED}
          registrations={approvedRegistrations}
        />
        <Collumn
          title="Reprovado"
          status={StatusEnum.REPROVED}
          registrations={reprovedRegistrations}
        />
      </Stack>
    </DragDropContext>
  );
};
export default Collumns;
