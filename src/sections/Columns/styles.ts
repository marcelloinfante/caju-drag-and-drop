import styled from "styled-components";

import Stack from "@/components/Stack";
import { sizes } from "@/theme/responsive";

export const Columns = styled(Stack)`
  @media (max-width: ${sizes.md}) {
    flex-direction: column;
  }
`;
