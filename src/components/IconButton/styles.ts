import styled from "styled-components";

import { primary } from "@/theme/palette";

export const IconButton = styled.button`
  padding: 4px;
  display: flex;
  cursor: pointer;
  width: fit-content;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 2px solid ${primary.main};

  svg {
    color: ${primary.main};
  }
`;
