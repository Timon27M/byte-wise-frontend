import { z } from "zod";

export const loginSchema = z.object({
  login: z
    .string()
    .min(3, "Догин должен содержать 3 символа")
    .max(20, "Логин должен содержать максимум 20 символов")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Логин может содержать только буквы, цифры и нижнее подчеркивание",
    ),
  password: z
    .string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .max(32, "Пароль должен содержать максимум 32 символа"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
