import { z } from "zod";
export declare const loginSchema: z.ZodObject<{
    login: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginFormData = z.infer<typeof loginSchema>;
