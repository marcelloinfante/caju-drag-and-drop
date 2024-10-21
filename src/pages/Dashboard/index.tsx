import { useEffect } from "react";

import { useRegistrationContext } from "~/contexts/registration";

import Loading from "~/sections/Loading";
import Collumns from "~/sections/Columns";
import SearchBar from "~/sections/Searchbar";

import Container from "~/components/Container";

const DashboardPage = () => {
  const { loading, readRegistrations } = useRegistrationContext();

  useEffect(() => {
    readRegistrations();
  }, []);

  return (
    <Container>
      <SearchBar />
      <Collumns />
      {loading && <Loading />}
    </Container>
  );
};

export default DashboardPage;
