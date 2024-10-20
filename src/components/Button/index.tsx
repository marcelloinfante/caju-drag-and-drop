import { ReactNode, ButtonHTMLAttributes } from "react";

import { ButtonMain } from "./styles";

import { button } from "~/theme/palette";
import Typography from "../Typography";

interface ButtonProps extends ButtonHTMLAttributes<any> {
  children: ReactNode;
  style?: React.CSSProperties;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
}

const Button = ({
  children,
  style,
  size = "medium",
  color = "primary",
  ...props
}: ButtonProps) => {
  return (
    <ButtonMain type="submit" style={{ ...button[color], ...style }} {...props}>
      <Typography>{children}</Typography>
    </ButtonMain>
  );
};

export default Button;
