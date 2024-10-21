import styled from "styled-components";

import { error as errorPalette } from "~/theme/palette";

export const TextField = styled.div`
  width: 100%;
`;

export const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 0 8px;
  font-size: 16px;
  min-height: 36px;
  line-height: 18px;
  border-radius: 8px;
  vertical-align: middle;
  background-color: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ error }) =>
    error ? errorPalette.main : "rgba(36, 28, 21, 0.3)"};

  &:focus {
    outline: none;
    box-shadow: ${({ error }) =>
      `inset 0 0 0 1px ${error ? errorPalette.main : "#007c89"}`};
    border-color: ${({ error }) => (error ? errorPalette.main : "#007c89")};
  }
`;
