import { ReactNode } from "react";

import { SIZE_TO_PIXELS } from "~/constants";

import * as S from "./styles";

interface ContainerProps {
  children: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

// TODO: improve
const Container = ({ children, maxWidth = "lg" }: ContainerProps) => {
  let sectionMaxWidth;

  if (maxWidth) {
    sectionMaxWidth = SIZE_TO_PIXELS[maxWidth];
  }

  return <S.Container maxWidth={sectionMaxWidth}>{children}</S.Container>;
};

export default Container;
