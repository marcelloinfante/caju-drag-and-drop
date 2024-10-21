import styled from "styled-components";

export const Container = styled.section<{ maxWidth?: string }>`
  max-width: ${({ maxWidth }) => maxWidth};
  margin: auto;
  padding: 24px;
`;
