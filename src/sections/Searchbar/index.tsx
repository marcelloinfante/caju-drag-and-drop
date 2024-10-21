import { useState } from "react";

import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";

import routes from "~/router/routes";
import { maskCpf, unmaskCpf } from "~/utils/cpfMask";

import { useRegistrationContext } from "~/contexts/registration";

import Button from "~/components/Button";
import TextField from "~/components/TextField";
import IconButton from "~/components/IconButton";

import * as S from "./styles";

const SearchBar = () => {
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

    if (maskedCpf.length === 0) {
      setError("");
    }

    if (maskedCpf.length === 14) {
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
      <S.CPFField
        value={cpf}
        error={error}
        onChange={handleOnChange}
        placeholder="Digite um CPF válido"
      />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={handleOnRefresh}>
          <HiRefresh />
        </IconButton>
        <Button onClick={goToNewAdmissionPage}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};

export default SearchBar;
