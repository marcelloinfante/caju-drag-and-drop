import { useRef } from "react";
import { SnackbarProvider as NotistackProvider } from "notistack";

interface Props {
  children: React.ReactNode;
}

const SnackbarProvider = ({ children }: Props) => {
  const notistackRef = useRef<any>(null);

  return (
    <NotistackProvider
      ref={notistackRef}
      maxSnack={5}
      preventDuplicate
      variant="success"
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      {children}
    </NotistackProvider>
  );
};

export default SnackbarProvider;
