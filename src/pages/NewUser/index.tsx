import { useHistory } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import routes from "~/router/routes";
import { fDate } from "~/utils/formatDate";
import { maskCpf, unmaskCpf } from "~/utils/cpfMask";

import { useRegistrationContext } from "~/contexts/registration";

import Card from "~/components/Card";
import Stack from "~/components/Stack";
import Button from "~/components/Button";
import Container from "~/components/Container";
import IconButton from "~/components/IconButton";
import { useSnackbar } from "~/components/Snackbar";
import FormProvider, { RHFTextField } from "~/components/HookForm";

import { RegistrationCreate } from "~/types";

const NewUserPage = () => {
  const { createRegistration } = useRegistrationContext();
  const { enqueueSnackbar } = useSnackbar();

  const history = useHistory();

  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const CreateRegistrationSchema: Yup.ObjectSchema<RegistrationCreate> =
    Yup.object().shape({
      cpf: Yup.string()
        .required("Campo obrigatório")
        .min(14, "Digite um CPF válido"),
      name: Yup.string()
        .required("Campo obrigatório")
        .matches(/^[a-zA-Z]/, "A primeira letra não pode ser um número")
        .min(3, "Deve ter pelo menos 3 caracteres")
        .matches(
          /^[a-zA-Z].*[a-zA-Z].*[a-zA-Z]/,
          "Deve ter no mínimo duas letras"
        )
        .matches(/^[a-zA-Z].* .*[a-zA-Z]/, "Deve conter pelo menos um espaço"),
      date: Yup.string().required("Campo obrigatório"),
      email: Yup.string()
        .required("Campo obrigatório")
        .email("Email deve ser válido"),
    });

  const defaultValues = {
    cpf: "",
    name: "",
    date: "",
    email: "",
  };

  const methods = useForm<RegistrationCreate>({
    resolver: yupResolver(CreateRegistrationSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(({ cpf, date, ...other }) => {
    try {
      const registration = {
        ...other,
        date: fDate(date),
        cpf: unmaskCpf(cpf),
      };

      createRegistration(registration);
      enqueueSnackbar("Registro criado com sucesso!");

      goToHome();
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Erro ao criar registro!", { variant: "error" });
    }
  });

  return (
    <Container
      maxWidth="sm"
      style={{ height: "100%", justifyContent: "center" }}
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Card>
          <Stack spacing="24px">
            <IconButton onClick={goToHome} aria-label="back">
              <HiOutlineArrowLeft size={24} />
            </IconButton>
            <RHFTextField name="name" label="Nome" placeholder="Nome" />
            <RHFTextField name="email" label="Email" placeholder="Email" />
            <RHFTextField
              name="cpf"
              label="CPF"
              mask={maskCpf}
              placeholder="CPF"
            />
            <RHFTextField name="date" label="Data de admissão" type="date" />
            <Button>Cadastrar</Button>
          </Stack>
        </Card>
      </FormProvider>
    </Container>
  );
};

export default NewUserPage;
