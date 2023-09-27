import { Test, TestingModule } from '@nestjs/testing';
import { Prisma } from '@prisma/client';
import { UserMock } from  '../users/mocks/user.mock';
import { UsersService } from '../users/users.service';

describe('UserService', () => {
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        // Replace the actual UserService with the mock implementation
        {
          provide: UsersService,
          useClass: UserMock,
        },
      ],
    }).compile();

    userService = module.get<UsersService>(UsersService);
  });
  it('should create a new user', async () => {
  });
//tets case to return all users
  it('should return all users', async () => {
    const users = await userService.findAll();
    expect(users).toBeDefined();
    expect(users.length).toBeGreaterThan(0);
    
    users.forEach((user) => {
      console.log(`User ID: ${user.id}`);
      console.log(`Username: ${user.username}`);
      console.log(`Email: ${user.email}`);
    });
  });
 it('should return single user', async () => {
  const user = await userService.findOne(1);
  expect(user).toBeDefined();
  expect(user?.id).toBe(1);
  expect(user?.username).toBe('samisams');
  expect(user?.email).toBe('samisams@gmail.com');  
});
it('should update a user', async () => {
  // Mock the necessary dependencies or set up test data if required

  // Provide the necessary input for the update operation
  const userId = 1;
  const updateData:Prisma.UserCreateInput  = {
    username: 'UpdatedJohn',
    email: 'updatedjohn@example.com',
    password: 'updatedpassword123',
    firstName:'sasaw',
    lastName:'kebede' 
  };
  // Perform the update operation
  const updatedUser = await userService.updateUser(userId, updateData);

  // Assert the expected outcomes
  expect(updatedUser).toBeDefined();
  expect(updatedUser.id).toBe(userId);
  expect(updatedUser.username).toBe('UpdatedJohn');
  expect(updatedUser.email).toBe('updatedjohn@example.com');
});
it('should delete a new user', async () => {
});
  // Add more test cases as needed
});