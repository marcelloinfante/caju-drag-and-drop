import styled from "styled-components";

import { shadows } from "~/theme/shadows";
import { background } from "~/theme/palette";

interface CardMainProps {
  backgroundColor?: string;
}

export const CardMain = styled.div<CardMainProps>`
  margin: auto;
  padding: 36px;
  border-radius: 12px;
  box-shadow: ${shadows.card};
  background-color: ${background.paper};
`;
