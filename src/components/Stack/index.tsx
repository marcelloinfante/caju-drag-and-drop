import { ReactNode, HTMLAttributes } from "react";

import * as S from "./styles";

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
    <S.Stack
      style={style}
      ref={innerRef}
      spacing={spacing}
      direction={direction}
      {...props}
    >
      {children}
    </S.Stack>
  );
};

export default Stack;
