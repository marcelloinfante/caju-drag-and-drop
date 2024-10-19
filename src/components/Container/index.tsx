import { ReactNode } from "react";
import { Section } from "./styles";

import { SIZE_TO_PIXELS } from "~/constants";

interface ContainerProps {
  children: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

const Container = ({ children, maxWidth = "lg" }: ContainerProps) => {
  let sectionMaxWidth;

  if (maxWidth) {
    sectionMaxWidth = SIZE_TO_PIXELS[maxWidth];
  }

  return <Section maxWidth={sectionMaxWidth}>{children}</Section>;
};

export default Container;
