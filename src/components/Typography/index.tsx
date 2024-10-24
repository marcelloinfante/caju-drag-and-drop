import { ReactNode, HTMLAttributes } from "react";

import { text } from "@/theme/palette";
import { typography } from "@/theme/typography";

import * as S from "./styles";

interface TypographyProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
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
    | "textDisabled"
    | string;
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
  ...props
}: TypographyProps) => {
  return (
    <S.Typography
      data-testid="typography"
      style={{
        textAlign: align,
        color: text[color] || color,
        ...typography[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </S.Typography>
  );
};

export default Typography;
