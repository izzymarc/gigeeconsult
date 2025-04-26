import { z } from "zod";

// Basic contact form schema
export const contactSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

// Contact form response schema
export const contactResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

// Type definitions
export type ContactFormData = z.infer<typeof contactSchema>;
export type ContactFormResponse = z.infer<typeof contactResponseSchema>;
