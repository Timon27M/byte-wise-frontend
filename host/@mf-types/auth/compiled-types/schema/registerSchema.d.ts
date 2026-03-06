import z from "zod";
export declare const registerSchema: z.ZodObject<{
    login: z.ZodString;
    password: z.ZodString;
    passwordConfirm: z.ZodString;
}, z.core.$strip>;
export type RegisterFormData = z.infer<typeof registerSchema>;
