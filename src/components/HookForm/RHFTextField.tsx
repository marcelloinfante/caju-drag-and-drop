import { Controller, useFormContext } from "react-hook-form";

import TextField, { TextFieldProps } from "@/components/TextField";

interface RHFTextFieldProps extends TextFieldProps {
  name: string;
}

const RHFTextField = ({ name, ...props }: RHFTextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <TextField {...field} error={error?.message} innerRef={ref} {...props} />
      )}
    />
  );
};

export default RHFTextField;
