export declare function comparePasswords(password: string, hashedPassword: string): Promise<boolean>;
export declare function hashPassword(password: string): Promise<string>;
export declare function generatePasswordResetToken(): string;
export declare function sendPasswordResetEmail(email: string, resetToken: string): Promise<void>;
