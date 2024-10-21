import styled from "styled-components";

import { shadows } from "~/theme/shadows";
import { background } from "~/theme/palette";

export const Card = styled.div`
  padding: 36px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  box-shadow: ${shadows.card};
  background-color: ${background.paper};
`;
