import styled from "styled-components";

export const TextFieldMain = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0 8px;
  font-size: 16px;
  min-height: 36px;
  line-height: 18px;
  border-radius: 8px;
  vertical-align: middle;
  background-color: #ffffff;
  border: 1px solid rgba(36, 28, 21, 0.3);

  :focus {
    outline: none;
    border: 1px solid #007c89;
    box-shadow: inset 0 0 0 1px #007c89;
  }
`;
