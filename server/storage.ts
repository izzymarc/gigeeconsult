import { 
  users, 
  type User, 
  type InsertUser,
  contactSubmissions,
  type ContactSubmission,
  type InsertContactSubmission 
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private userIdCounter: number;
  private contactIdCounter: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.userIdCounter = 1;
    this.contactIdCounter = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactIdCounter++;
    const createdAt = new Date();
    
    // Create submission with correct type structure
    const submission: ContactSubmission = {
      id,
      name: data.name,
      email: data.email,
      message: data.message,
      phone: data.phone || null,
      service: data.service || null,
      createdAt
    };
    
    this.contactSubmissions.set(id, submission);
    console.log('Contact submission created:', submission);
    return submission;
  }
}

export const storage = new MemStorage();
