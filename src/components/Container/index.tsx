import { ReactNode, HTMLAttributes } from "react";

import { SIZE_TO_PIXELS } from "~/constants";

import * as S from "./styles";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

// TODO: improve
const Container = ({ children, maxWidth = "lg", ...props }: ContainerProps) => {
  let sectionMaxWidth;

  if (maxWidth) {
    sectionMaxWidth = SIZE_TO_PIXELS[maxWidth];
  }

  return (
    <S.Container maxWidth={sectionMaxWidth} {...props}>
      {children}
    </S.Container>
  );
};

export default Container;
