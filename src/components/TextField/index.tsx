import { InputHTMLAttributes } from "react";

import { Input } from "./styles";
import Typography from "../Typography";

interface TextFieldProps extends InputHTMLAttributes<any> {
  label?: string;
  error?: string;
}

const TextField = ({ id, label, error, ...props }: TextFieldProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input {...props} />
      <Typography color="error" variant="caption">
        {error}
      </Typography>
    </div>
  );
};

export default TextField;
