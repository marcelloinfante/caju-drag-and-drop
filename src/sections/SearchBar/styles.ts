import styled from "styled-components";

import { sizes } from "@/theme/responsive";
import TextField from "@/components/TextField";

export const Container = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${sizes.sm}) {
    flex-direction: column;
  }
`;

export const Actions = styled.div`
  gap: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: ${sizes.sm}) {
    justify-content: space-between;
  }
`;

export const CPFField = styled(TextField)`
  width: 250px;

  @media (max-width: ${sizes.sm}) {
    width: 100%;
  }
`;
