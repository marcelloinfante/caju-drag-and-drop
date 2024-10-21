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

// TODO: fix type
export const Typography = styled.span<TypographyProps>`
  margin: 0;
  width: 100%;
  text-align: ${({ align }) => align};
  color: ${({ color }) => text[color] || color};
`;
