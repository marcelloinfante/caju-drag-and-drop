import { useState } from "react";
import { Link } from "react-router-dom";
import { HiRefresh } from "react-icons/hi";

import routes from "@/router/routes";
import { maskCpf, unmaskCpf } from "@/utils/cpfMask";

import { useRegistrationContext } from "@/contexts/registration";

import Button from "@/components/Button";
import IconButton from "@/components/IconButton";

import * as S from "./styles";

const SearchBar = () => {
  const { readRegistrations } = useRegistrationContext();

  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");

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
    <S.Container data-testId="search-bar">
      <S.CPFField
        value={cpf}
        error={error}
        onChange={handleOnChange}
        placeholder="Digite um CPF válido"
      />
      <S.Actions>
        <IconButton onClick={handleOnRefresh}>
          <HiRefresh />
        </IconButton>
        <Link to={routes.newUser}>
          <Button>Nova Admissão</Button>
        </Link>
      </S.Actions>
    </S.Container>
  );
};

export default SearchBar;
