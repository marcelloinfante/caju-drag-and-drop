import styled from "styled-components";

import Card from "@/components/Card";

export const Column = styled(Card)`
  width: 100%;
  padding: 16px;
  margin-top: 24px;
  max-height: 800px;
`;

export const ColumnContent = styled.div`
  height: 100%;
  max-height: 560px;
  margin-top: 24px;
  margin-bottom: 35px;
  overflow-y: scroll;
`;
