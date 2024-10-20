import { useState } from "react";

import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";

import { useRegistrationContext } from "~/contexts/registration/hook";

import routes from "~/router/routes";

import Button from "~/components/Button";
import TextField from "~/components/TextField";
import { IconButton } from "~/components/IconButton";

import { maskCpf, unmaskCpf } from "~/utils/cpfMask";

import * as S from "./styles";

export const SearchBar = () => {
  const { readRegistrations } = useRegistrationContext();

  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  const handleOnChange = (e: React.ChangeEvent<any>) => {
    const maskedCpf = maskCpf(e.target.value);
    setCpf(maskedCpf);
    setError("Adicione um CPF válido");

    if (maskedCpf.length === 0 || maskedCpf.length === 14) {
      setError("");

      const unmaskedCpf = unmaskCpf(maskedCpf);
      readRegistrations(unmaskedCpf);
    }
  };

  const handleOnRefresh = () => {
    setCpf("");
    setError("");
    readRegistrations();
  };

  return (
    <S.Container>
      <TextField
        value={cpf}
        error={error}
        onChange={handleOnChange}
        style={{ width: "250px" }}
        placeholder="Digite um CPF válido"
      />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={handleOnRefresh}>
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
