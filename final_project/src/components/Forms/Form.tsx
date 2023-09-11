import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { TContactFormSchema, contactFormSchema } from "../../helpers/Types";
import FormInput from "./FormInputs";

const Form = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

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
    <Container
      sx={{ display: "flex", justifyContent: "center", mb: "5rem", p: "2rem" }}
    >
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
          component={isSmallScreen ? "h3" : "h2"}
          variant={isSmallScreen ? "h3" : "h2"}
          sx={{
            mb: isSmallScreen ? "2rem" : "3rem",
            letterSpacing: "0.2rem",
            textAlign: isSmallScreen ? "center" : "left",
          }}
        >
          SUBSCRIBE NOW!
        </Typography>

        <FormInput
          name="name"
          placeholder="Name"
          type="text"
          error={errors.name?.message}
          register={register}
        />

        <FormInput
          name="surname"
          placeholder="Surname"
          type="text"
          error={errors.surname?.message}
          register={register}
        />

        <FormInput
          name="email"
          placeholder="Email"
          type="email"
          error={errors.email?.message}
          register={register}
        />

        <FormInput
          name="password"
          placeholder="Password"
          type="password"
          error={errors.password?.message}
          register={register}
        />

        <FormInput
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          error={errors.confirmPassword?.message}
          register={register}
        />

        <Box sx={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>

          <Button
            disabled={isSubmitting}
            type="reset"
            variant="contained"
            color="error"
          >
            Clear
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Form;
