// user-db-service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma.service';
import { UserDBService } from './userDB.service';
import { UserInfoRequestDto } from '../dto/userInfo-request.dto';

describe('UserDBService', () => {
  let userDBService: UserDBService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserDBService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              upsert: jest.fn(), // Mock the upsert method
            },
          },
        },
      ],
    }).compile();

    userDBService = module.get<UserDBService>(UserDBService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should upsert user data with mocked data', async () => {
    const mockUserInfo: UserInfoRequestDto = {
      userId: 'mockUserId',
      username: 'mockUsername',
      email: 'mockEmail@example.com',
      password: 'mockPassword', // In production, ensure this password is hashed
    };

    await userDBService.storeUserData(mockUserInfo);

    expect(prismaService.user.upsert).toHaveBeenCalledWith({
      where: { userId: 'mockUserId' },
      update: {
        username: 'mockUsername',
        email: 'mockEmail@example.com',
        password: 'mockPassword',
      },
      create: {
        username: 'mockUsername',
        email: 'mockEmail@example.com',
        password: 'mockPassword',
      },
    });
  });
});
