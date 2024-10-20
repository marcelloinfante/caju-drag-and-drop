import { ReactNode, HTMLAttributes } from "react";
import { StackMain } from "./styles";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  direction?: "column-reverse" | "column" | "row-reverse" | "row";
  innerRef?: (element: HTMLElement | null) => void;
}

const Stack = ({
  style,
  spacing,
  children,
  direction = "column",
  innerRef,
  ...props
}: StackProps) => {
  return (
    <StackMain
      style={style}
      ref={innerRef}
      spacing={spacing}
      direction={direction}
      {...props}
    >
      {children}
    </StackMain>
  );
};

export default Stack;
