import { useEffect } from "react";

import { useRegistrationContext } from "@/contexts/registration";

import Loading from "@/sections/Loading";
import Columns from "@/sections/Columns";
import SearchBar from "@/sections/SearchBar";

import Container from "@/components/Container";

const DashboardPage = () => {
  const { loading, readRegistrations } = useRegistrationContext();

  useEffect(() => {
    readRegistrations();
  }, []);

  return (
    <Container style={{ height: "100%" }}>
      <SearchBar />
      <Columns />
      {loading && <Loading />}
    </Container>
  );
};

export default DashboardPage;
