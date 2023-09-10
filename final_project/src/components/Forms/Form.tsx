import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormControl,
  TextField,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { useState } from "react";
import Message from "../Messages/Message";
import MyFormInput from "./FormInputs";

interface FormData {
  "First name": string;
  "Last name": string;
  "Email": string;
  "Password": string;
  "Confirm Password": string;
}

const MyForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isErrorMessageOpen, setIsErrorMessageOpen] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.Password !== data["Confirm Password"]) {
      setIsPasswordMismatch(true);
      setIsFormSubmitted(false);
      setIsErrorMessageOpen(true);
    } else {
      const isAnyFieldEmpty = Object.values(data).some((value) => value === "");
      if (isAnyFieldEmpty) {
        setIsFormSubmitted(false);
        setIsErrorMessageOpen(true);
      } else {
        setIsFormSubmitted(true);
        setIsErrorMessageOpen(false);
        reset();
      }
    }
  };

  return (
    <Container>
      <FormControl sx={{ width: "100%" }}>
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          sx={{ margin: "2rem" }}
        >
          Subscribe Now!
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <MyFormInput
            nameAlias="First Name"
            variant="filled"
            {...register("First name", { required: true, maxLength: 50 })}
          />
          <MyFormInput
            nameAlias="Last Name"
            variant="filled"
            {...register("Last name", { required: true, maxLength: 60 })}
          />
          <MyFormInput
            nameAlias="Email"
            variant="filled"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <MyFormInput
            nameAlias="Password"
            variant="filled"
            {...register("Password", {
              required: true,
              minLength: 8,
              maxLength: 30,
            })}
          />
          <MyFormInput
          variant="filled"
            nameAlias="Confirm Password"
            {...register("Confirm Password", {
              required: true,
              minLength: 8,
              maxLength: 30,
            })}
          />

          <Button variant="contained" color="info" type="submit">
            Submit
          </Button>
          <Button
            variant="contained"
            color="error"
            type="button"
            onClick={() => {
              reset();
              setIsPasswordMismatch(false);
              setIsFormSubmitted(false);
            }}
          >
            Clear Form
          </Button>
          {!isFormSubmitted && isPasswordMismatch && (
            <Message
              message="Passwords do not match"
              severity="error"
              open={isErrorMessageOpen}
              handleClose={() => setIsErrorMessageOpen(false)}
            />
          )}
          {!isFormSubmitted && !isPasswordMismatch && (
            <Message
              message="All required fields are not filled."
              severity="error"
              open={isErrorMessageOpen}
              handleClose={() => setIsErrorMessageOpen(false)}
            />
          )}
          {isFormSubmitted && (
            <Message
              message="Form submitted successfully!"
              severity="success"
              open={isFormSubmitted}
              handleClose={() => setIsFormSubmitted(false)}
            />
          )}
        </form>
      </FormControl>
    </Container>
  );
};

export default MyForm;