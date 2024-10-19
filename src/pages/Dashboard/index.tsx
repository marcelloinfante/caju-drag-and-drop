import { useEffect } from "react";

import Collumns from "../../sections/Columns";
import { SearchBar } from "../../sections/Searchbar";
import Container from "~/components/Container";

import { useRegistrationContext } from "~/contexts/registration/hook";

const DashboardPage = () => {
  const { loading, readRegistrations } = useRegistrationContext();

  useEffect(() => {
    readRegistrations();
  }, []);

  if (loading) {
    <>Carregando...</>;
  }

  return (
    <Container>
      <SearchBar />
      <Collumns />
    </Container>
  );
};
export default DashboardPage;
