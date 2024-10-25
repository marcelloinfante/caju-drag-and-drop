import styled from "styled-components";

import Stack from "@/components/Stack";
import { sizes } from "@/theme/responsive";

export const Columns = styled(Stack)`
  overflow: hidden;
  align-items: flex-start;
  margin-top: 16px;

  @media (max-width: ${sizes.md}) {
    flex-direction: column !important;
  }
`;
