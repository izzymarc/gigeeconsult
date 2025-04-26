import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { contactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const contactData = contactSchema.parse(req.body);
      
      // Store the contact form submission
      const submission = await storage.createContactSubmission(contactData);
      
      res.status(201).json({
        message: "Contact form submitted successfully",
        id: submission.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({ message: "Failed to submit contact form" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
