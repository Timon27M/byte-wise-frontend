import { TextFieldProps } from "@mui/material";
import { type Control } from "react-hook-form";
type TProps = {
    name: string;
    control: Control<any>;
    label: string;
    isError: boolean;
} & Omit<TextFieldProps, 'name' | 'label' | 'error' | 'helperText'>;
export default function DefaultInput({ name, control, isError, label, ...props }: TProps): import("react/jsx-runtime").JSX.Element;
export {};
