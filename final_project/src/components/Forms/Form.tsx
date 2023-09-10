import { useForm } from "react-hook-form";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { TContactFormSchema, contactFormSchema } from "../../helpers/Types";
import CustomTextField from "./FormInputs";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: TContactFormSchema) => {
    // TODO: submit to your own server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          sx={{ margin: "2rem" }}
        >
          Subscribe Now!
        </Typography>

        <CustomTextField
          name="name"
          placeholder="Name"
          type="text"
          error={errors.name?.message}
          register={register}
        />

        <CustomTextField
          name="surname"
          placeholder="Surname"
          type="text"
          error={errors.surname?.message}
          register={register}
        />

        <CustomTextField
          name="email"
          placeholder="Email"
          type="email"
          error={errors.email?.message}
          register={register}
        />

        <CustomTextField
          name="password"
          placeholder="Password"
          type="password"
          error={errors.password?.message}
          register={register}
        />

        <CustomTextField
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          error={errors.confirmPassword?.message}
          register={register}
        />
        
        <Box sx={{ display: "flex", justifyContent: "center", gap: "2rem"}}>
          <Button disabled={isSubmitting} type="submit" variant="contained" color="primary">
            Submit
          </Button>

          <Button disabled={isSubmitting} type="reset" variant="contained" color="error">
            Clear
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Form;
