import styled from "styled-components";

interface StackProps {
  spacing?: string;
  direction?: "column-reverse" | "column" | "row-reverse" | "row";
}
export const StackMain = styled.div<StackProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: ${({ spacing }) => spacing};
  flex-direction: ${({ direction }) => direction};
`;
