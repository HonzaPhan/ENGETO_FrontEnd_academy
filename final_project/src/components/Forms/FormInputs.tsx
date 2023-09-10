import { ForwardedRef, forwardRef } from "react";
import { TextField, TextFieldProps } from "@mui/material";

interface MyFormInputProps<Variant extends "filled" | "standard" | "outlined"> {
  nameAlias: string;
  variant: Variant;
}

const MyFormInput = forwardRef(
  <Variant extends "filled" | "standard" | "outlined">(
    { nameAlias, variant, ...props }: MyFormInputProps<Variant>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <TextField
        label={nameAlias}
        {...(props as TextFieldProps<Variant>)}
        sx={{ width: "70%" }}
        name={nameAlias.replace(/ /g, "-")}
        ref={ref}
      />
    );
  }
);

export default MyFormInput;
