import { ReactNode, HTMLAttributes } from "react";

import { sizes } from "~/theme/responsive";

import * as S from "./styles";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

// TODO: improve
const Container = ({ children, maxWidth = "lg", ...props }: ContainerProps) => {
  let sectionMaxWidth;

  if (maxWidth) {
    sectionMaxWidth = sizes[maxWidth];
  }

  return (
    <S.Container maxWidth={sectionMaxWidth} {...props}>
      {children}
    </S.Container>
  );
};

export default Container;
