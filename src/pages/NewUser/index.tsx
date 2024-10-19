import TextField from "~/components/TextField";
import Button from "~/components/Button";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton } from "~/components/IconButton";
import { useHistory } from "react-router-dom";
import routes from "~/router/routes";

import Card from "~/components/Card";
import Stack from "~/components/Stack";
import Container from "~/components/Container";

const NewUserPage = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push(routes.dashboard);
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <Stack spacing="16px">
          <IconButton onClick={() => goToHome()} aria-label="back">
            <HiOutlineArrowLeft size={24} />
          </IconButton>
          <TextField placeholder="Nome" label="Nome" />
          <TextField placeholder="Email" label="Email" type="email" />
          <TextField placeholder="CPF" label="CPF" />
          <TextField label="Data de admissão" type="date" />
          <Button onClick={() => {}}>Cadastrar</Button>
        </Stack>
      </Card>
    </Container>
  );
};

export default NewUserPage;
