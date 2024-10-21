import { InputHTMLAttributes } from "react";

import Typography from "~/components/Typography";

import * as S from "./styles";

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
    <S.TextField style={style}>
      <Typography color={!!error ? "error" : "textPrimary"}>{label}</Typography>
      <S.Input error={!!error} value={mask ? mask(value) : value} {...props} />
      <Typography
        color="error"
        variant="caption"
        style={{
          position: "absolute",
        }}
      >
        {error}
      </Typography>
    </S.TextField>
  );
};

export default TextField;
