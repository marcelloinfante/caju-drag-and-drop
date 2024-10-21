import styled from "styled-components";

export const Container = styled.section<{ maxWidth?: string }>`
  width: 100%;
  margin: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: ${({ maxWidth }) => maxWidth};
`;
