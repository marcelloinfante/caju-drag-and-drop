import styled from "styled-components";

const registrationStatusStyles: {
  [key in string]: { background: string; title: string };
} = {
  REVIEW: {
    background: "#FDF8E9",
    title: "#EFC24D",
  },
  APPROVED: {
    background: "#EEEEFD",
    title: "#4242DF",
  },
  REPROVED: {
    background: "#FBEDF6",
    title: "#CE2893",
  },
};

export const Column = styled.div<{ status: any }>`
  background-color: ${({ status }) =>
    registrationStatusStyles[status].background};
  border-radius: 32px;
  max-height: 70vh;
  width: 100%;
  padding: 16px;
`;

export const TitleColumn = styled.h3<{ status: any }>`
  margin: 0px;
  color: ${({ status }) => registrationStatusStyles[status].title};
  margin: 24px;
`;

export const CollumContent = styled.div`
  height: 100%;
`;
