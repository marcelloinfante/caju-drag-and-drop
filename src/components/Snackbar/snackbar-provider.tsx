import { useRef } from "react";
import { SnackbarProvider as NotistackProvider } from "notistack";

type Props = {
  children: React.ReactNode;
};

export default function SnackbarProvider({ children }: Props) {
  const notistackRef = useRef<any>(null);

  return (
    <NotistackProvider
      ref={notistackRef}
      maxSnack={5}
      preventDuplicate
      autoHideDuration={3000}
      variant="success"
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      {children}
    </NotistackProvider>
  );
}
