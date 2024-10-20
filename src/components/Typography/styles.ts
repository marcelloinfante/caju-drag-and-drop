import styled from "styled-components";

import { text } from "~/theme/palette";

interface TypographyProps {
  align: "center" | "inherit" | "justify" | "left" | "right";
  color:
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
}

export const TypographyMain = styled.span<TypographyProps>`
  color: ${({ color }) => text[color] || color};
  text-align: ${({ align }) => align};
  margin: 0;
`;
