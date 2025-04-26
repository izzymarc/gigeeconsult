import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export type ContactFormValues = z.infer<typeof contactSchema>; 