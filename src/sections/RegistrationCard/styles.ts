import styled from "styled-components";

import Card from "@/components/Card";
import { sizes } from "@/theme/responsive";

export const RegistrationCard = styled(Card)`
  padding: 20px;
  margin-bottom: 20px;

  @media (max-width: ${sizes.md}) {
    padding: 15px;
  }
`;

export const IconAndText = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
`;

export const TextAndDeletion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
