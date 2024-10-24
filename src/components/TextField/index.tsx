import { InputHTMLAttributes } from "react";

import Typography from "@/components/Typography";

import * as S from "./styles";

export interface TextFieldProps extends InputHTMLAttributes<any> {
  label?: string;
  error?: string;
  mask?: (value: any) => string;
  innerRef?: (element: HTMLElement | null) => void;
}

const TextField = ({
  label,
  error,
  style,
  value,
  mask,
  onChange,
  innerRef,
  ...props
}: TextFieldProps) => {
  return (
    <S.TextField data-testid="textfield" style={style}>
      {label && (
        <Typography data-testid="textfield-label" color={error ? "error" : "textPrimary"}>
          {label}
        </Typography>
      )}
      <S.Input
        ref={innerRef}
        $error={!!error}
        autoComplete="off"
        data-testid="textfield-input"
        value={mask ? mask(value) : value}
        onChange={(e) => onChange && onChange(e)}
        {...props}
      />
      {error && (
        <Typography
          data-testid="textfield-error"
          color="error"
          variant="caption"
          style={{
            bottom: -20,
            position: "absolute",
          }}
        >
          {error}
        </Typography>
      )}
    </S.TextField>
  );
};

export default TextField;
