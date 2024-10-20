import { useEffect } from "react";

import { useRegistrationContext } from "~/contexts/registration/hook";

import Collumns from "~/sections/Columns";
import { SearchBar } from "~/sections/Searchbar";

import Container from "~/components/Container";
import Loading from "~/sections/Loading";

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
