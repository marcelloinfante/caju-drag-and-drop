import { InputHTMLAttributes } from "react";

import { Input, TextFieldMain } from "./styles";
import Typography from "../Typography";

export interface TextFieldProps extends InputHTMLAttributes<any> {
  label?: string;
  error?: string;
  style?: React.CSSProperties;
}

const TextField = ({ id, label, error, style, ...props }: TextFieldProps) => {
  return (
    <TextFieldMain style={style}>
      <label htmlFor={id}>{label}</label>
      <Input {...props} />
      <Typography
        color="error"
        variant="caption"
        style={{
          position: "absolute",
        }}
      >
        {error}
      </Typography>
    </TextFieldMain>
  );
};

export default TextField;
