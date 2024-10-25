import { HTMLAttributes } from "react";

import { sizes } from "@/theme/responsive";

import * as S from "./styles";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Container = ({ children, style, maxWidth = "lg", ...props }: ContainerProps) => {
  return (
    <S.Container data-testid="container" style={{ maxWidth: sizes[maxWidth], ...style }} {...props}>
      {children}
    </S.Container>
  );
};

export default Container;
