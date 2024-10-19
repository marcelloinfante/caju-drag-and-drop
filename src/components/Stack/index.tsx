import { ReactNode } from "react";
import { StackMain } from "./styles";

interface StackProps {
  spacing?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  direction?: "column-reverse" | "column" | "row-reverse" | "row";
}

const Stack = ({
  style,
  spacing,
  children,
  direction = "column",
}: StackProps) => {
  return (
    <StackMain style={style} spacing={spacing} direction={direction}>
      {children}
    </StackMain>
  );
};

export default Stack;
