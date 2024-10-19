import styled from "styled-components";

interface SectionProps {
  maxWidth?: string;
}

export const Section = styled.section<SectionProps>`
  max-width: ${({ maxWidth }) => maxWidth};
  margin: auto;
  padding: 24px;
`;
