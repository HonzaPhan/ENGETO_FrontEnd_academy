import { FC } from "react";
import { TextField, Typography } from "@mui/material";
import { TContactFormSchema } from "../../helpers/Types";
import { UseFormRegister } from "react-hook-form"

interface CustomTextFieldProps {
  name: keyof TContactFormSchema;
  placeholder: string;
  type: string;
  error?: string;
  register: UseFormRegister<TContactFormSchema>;
}

const CustomTextField: FC<CustomTextFieldProps> = ({
  name,
  placeholder,
  type,
  error,
  register,
}) => (
  <>
    <TextField
      {...register(name)}
      type={type}
      placeholder={placeholder}
      color = {error? "error": "primary"}
      variant="outlined"
      sx={{
        width: "100%",
        px: "2rem"
      }}
    />
    {error && <Typography component="p" sx={{ color: "red", width: "100%", px: "2rem" }}>{error}</Typography>}
  </>
);

export default CustomTextField