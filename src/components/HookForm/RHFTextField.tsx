import { Controller, useFormContext } from "react-hook-form";

import TextField, { TextFieldProps } from "~/components/TextField";

interface RHFTextFieldProps extends TextFieldProps {
  name: string;
}

const RHFTextField = ({ name, ...props }: RHFTextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          onChange={(event) => {
            field.onChange(event.target.value);
          }}
          {...props}
        />
      )}
    />
  );
};

export default RHFTextField;
