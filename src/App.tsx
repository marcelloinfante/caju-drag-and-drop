import Router from "@/router";

import Header from "@/sections/Header";
import { SnackbarProvider } from "@/components/Snackbar";
import { RegistrationProvider } from "@/contexts/registration";

const App = () => {
  return (
    <SnackbarProvider>
      <RegistrationProvider>
        <Header />
        <Router />
      </RegistrationProvider>
    </SnackbarProvider>
  );
};

export default App;
