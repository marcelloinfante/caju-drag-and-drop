import RegistrationContext from "./RegistrationContext";

interface RegistrationConsumerProps {
  children: React.ReactNode;
}

const RegistrationConsumer = ({ children }: RegistrationConsumerProps) => {
  return (
    <RegistrationContext.Consumer>
      {() => children}
    </RegistrationContext.Consumer>
  );
};

export default RegistrationConsumer;
