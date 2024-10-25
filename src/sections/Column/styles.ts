import styled from "styled-components";

import Card from "@/components/Card";
import { sizes } from "@/theme/responsive";

export const Column = styled(Card)`
  width: 100%;
  height: auto;
  padding: 16px;
  display: flex;
  margin-top: 24px;
  max-height: 95%;
  overflow: hidden;
  position: relative;
  flex-direction: column;

  @media (max-width: ${sizes.md}) {
    height: 33%;
    margin-top: 0;
  }
`;

export const ColumnContent = styled.div`
  flex: 1;
  margin-top: 24px;
  margin-bottom: 16px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${sizes.md}) {
    margin-top: 10px;
    margin-bottom: 0;
  }
`;
