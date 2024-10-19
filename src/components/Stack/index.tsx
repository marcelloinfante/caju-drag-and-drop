import { ReactNode, HTMLAttributes } from "react";
import { StackMain } from "./styles";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
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
  ...props
}: StackProps) => {
  return (
    <StackMain style={style} spacing={spacing} direction={direction} {...props}>
      {children}
    </StackMain>
  );
};

export default Stack;
