import { InputHTMLAttributes } from "react";

import Typography from "~/components/Typography";

import { Input, TextFieldMain } from "./styles";

export interface TextFieldProps extends InputHTMLAttributes<any> {
  label?: string;
  error?: string;
  style?: React.CSSProperties;
  mask?: (value: any) => string;
}

const TextField = ({
  label,
  error,
  style,
  value,
  mask,
  ...props
}: TextFieldProps) => {
  return (
    <TextFieldMain style={style}>
      <Typography color={!!error ? "error" : "textPrimary"}>{label}</Typography>
      <Input error={!!error} value={mask ? mask(value) : value} {...props} />
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
