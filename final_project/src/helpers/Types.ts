import { z } from "zod";

export const contactFormSchema = z
  .object({
    email: z.string().email().min(5),
    name: z
      .string()
      .min(3, "Name is required and must be at least 3 characters!"),
    surname: z
      .string()
      .min(3, "Surname is required and must be at least 3 characters!"),
    password: z.string().min(10, "Password must be at least 10 characters!"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match!",
    path: ["confirmPassword"],
  });

export type TContactFormSchema = z.infer<typeof contactFormSchema>;
