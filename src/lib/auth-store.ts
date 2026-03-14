// In-memory storage for demo (replace with database in production)
export const users: Array<{ 
  fullName: string; 
  email: string; 
  password: string; 
  resetToken?: string; 
  resetTokenExpiry?: Date 
}> = [];

export const resetTokens: Map<string, { email: string; expiry: Date }> = new Map();
