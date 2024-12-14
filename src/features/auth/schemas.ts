import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Required")
});

export const signupSchema = z.object({
    name: z.string().trim().min(1,"Required"),
    email: z.string().email(),
    password: z.string().min(8, "Minimum of 8 characters are required"),
    confPassword: z.string().min(8, "Minimum of 8 characters are required")
}).refine((data) => data.password === data.confPassword, {
    message: "Passwords don't match",
    path: ["confPassword"],
});