import { ButtonHTMLAttributes } from "react";

import { button } from "@/theme/palette";
import Typography from "@/components/Typography";

import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<any> {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
}

const Button = ({
  children,
  style,
  // size = "medium",
  color = "primary",
  ...props
}: ButtonProps) => {
  const { textColor, backgroundColor } = button[color];

  return (
    <S.Button type="submit" data-testid="button" style={{ backgroundColor, ...style }} {...props}>
      <Typography
        align="center"
        color={textColor}
        data-testid="button-text"
        style={{ fontWeight: "bold" }}
      >
        {children}
      </Typography>
    </S.Button>
  );
};

export default Button;
