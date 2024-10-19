import { ReactNode } from "react";
import { TypographyMain } from "./styles";

import { typography } from "~/theme/typography";

interface TypographyProps {
  children?: ReactNode;
  style?: React.CSSProperties;
  align?: "center" | "inherit" | "justify" | "left" | "right";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "textPrimary"
    | "textSecondary"
    | "textDisabled";
  variant?:
    | "body1"
    | "body2"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2";
}

const Typography = ({
  style,
  children,
  variant = "body1",
  align = "inherit",
  color = "textPrimary",
}: TypographyProps) => {
  return (
    <TypographyMain
      align={align}
      color={color}
      style={{ ...typography[variant], ...style }}
    >
      {children}
    </TypographyMain>
  );
};

export default Typography;
