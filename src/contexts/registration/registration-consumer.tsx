import { RegistrationContext } from "./registration-context";

type Props = {
  children: React.ReactNode;
};

export function RegistrationConsumer({ children }: Props) {
  return (
    <RegistrationContext.Consumer>
      {() => children}
    </RegistrationContext.Consumer>
  );
}
