import styled from "styled-components";

import Container from "~/components/Container";

export const Header = styled.header`
  top: 0;
  width: 100%;
  height: 64px;
  display: flex;
  position: fixed;
  background: linear-gradient(
    258deg,
    rgba(255, 117, 0, 1) 8%,
    rgba(232, 5, 55, 1) 53%
  );
`;

export const HeaderContainer = styled(Container)`
  padding-top: 0;
  padding-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
`;
