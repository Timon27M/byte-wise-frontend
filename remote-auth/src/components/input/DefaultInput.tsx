import { TextField, TextFieldProps } from "@mui/material";
import { type Control, Controller, type FieldError } from "react-hook-form";

type TProps = {
  name: string;
  control: Control<any>;
  label: string;
  isError: boolean;
} & Omit<TextFieldProps, 'name' | 'label' | 'error' | 'helperText'>;

export default function DefaultInput({
  name,
  control,
  isError,
  label,
  ...props
}: TProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          error={!!isError}
          helperText={error?.message}
          {...props}
        />
      )}
    />
  );
}
