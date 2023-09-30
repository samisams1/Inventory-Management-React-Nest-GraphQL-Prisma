import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { MemcachedService } from '../memcached/memcached.service'
import { ChangePasswordInput, CreateUserInput } from './dto/create-user.input';
import fs from 'fs';

import * as bcrypt from 'bcrypt';
import { UpdateUserInput } from './dto/update-user.input';
@Injectable()
export class UsersService {
  private prisma: PrismaClient
  private readonly memcachedService:MemcachedService;
  private tokenMap: Map<string, string> = new Map();
 constructor(memcachedService: MemcachedService) {
    this.prisma = new PrismaClient();
    this.memcachedService = memcachedService;
  }
  async users(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }
  async user(id:number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({where:{id}});
    return user;
  }
  async create(input: CreateUserInput): Promise<User> {
    try {
      const { username, email, password, firstName, lastName,role } = input;
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await this.prisma.user.create({
        data: {
          firstName,
          lastName,
          username,
          email,
          password: hashedPassword,
          companyId: 1,
          phoneNumber: "+251973316377",
          address: "Addis Ababa",
          role:role
        },
      });

      return user;
    } catch (error) {
      throw error.message;
    }
  }
  async update(id: number, updateStoreDto: UpdateUserInput):Promise<User> {
    const { firstName,lastName,username,email,role,status } = updateStoreDto;
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        firstName,
        lastName,
        username,
        email,
        role,
        status
      },
    });
  }
  async delete(id:number):Promise<User>{
      return this.prisma.user.delete({where:{id}});
    }
  

    async changePassword(
      userId: number,
      changePasswordInput: ChangePasswordInput,
    ): Promise<User> {
      const { currentPassword, newPassword } = changePasswordInput;
  
      // Retrieve the user from the database
      const user = await this.prisma.user.findUnique({ where: { id: userId } });
      // Perform password validation and update the password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      if (user && await bcrypt.compare(currentPassword, user.password)) {
        
        return this.prisma.user.update({
          where: { id: userId },
          data: { password: hashedPassword },
        });
      }
  
      throw new Error('Invalid current password');
    }
  
    async forgotPassword(email: string): Promise<boolean> {
      const user = await this.prisma.user.findUnique({ where: { email } });
  
      if (!user) {
        throw new Error('User not found');
      }
  
      // Generate a unique token for password reset
      const token = this.generateRandomToken();
  
      // Create the forgot password record in the database
     /* await this.prisma.forgotPassword.create({
        data: {
          userId: user.id,
          token,
        },
      });8*/
      this.tokenMap.set(email, token);
  
      // Send password reset email with the generated token
      this.sendPasswordResetEmail(user.email, token);
  
      return true;
    }
  
    generateRandomToken(length: number = 16): string {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let token = '';
  
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters.charAt(randomIndex);
      }
  
      return token;
    }
  
    sendPasswordResetEmail(email: string, token: string): void {
      // Implement your email sending logic here
      // This is just a placeholder function for demonstration purposes
  
      console.log(`Sending password reset email to ${email}`);
      console.log(`Token: ${token}`);
    }
    async changePRofilePic(id: number, updateStoreDto: CreateUserInput):Promise<User> {
      const { firstName,lastName } = updateStoreDto;
  
      return this.prisma.user.update({
        where: {
          id,
        },
        data: {
          firstName,
          lastName,
        },
      });
    }

  async totalUsers() {
      const users = async () => {
        try {
          const count = await this.prisma.user.count();
          return count;
        } catch (error) {
          // Handle any errors that occur during the count operation
          throw new Error('An error occurred while counting products.');
        }
      };
    
      return users();
    }
    async uploadAvatar(file: any): Promise<string> {
      const { createReadStream, filename } = await file;
      const stream = createReadStream();
    
      // Define the path where you want to save the uploaded file
      const savePath = `path/to/save/${filename}`;
    
      // Save the file to the specified path
      await new Promise((resolve, reject) => {
        const writeStream = fs.createWriteStream(savePath);
        stream.pipe(writeStream);
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
      });
    
      // Perform any additional processing if needed
    
      // Return the file path or any other relevant response
      return savePath;
    }

}










