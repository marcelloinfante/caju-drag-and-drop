import { ReactNode, HTMLAttributes } from "react";

import { sizes } from "~/theme/responsive";

import * as S from "./styles";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Container = ({ children, maxWidth = "lg", ...props }: ContainerProps) => {
  return (
    <S.Container
      data-testid="container"
      style={{ maxWidth: sizes[maxWidth] }}
      {...props}
    >
      {children}
    </S.Container>
  );
};

export default Container;
