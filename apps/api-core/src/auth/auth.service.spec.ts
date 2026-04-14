import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AuthService],
        }).compile();

        service = module.get<AuthService>(AuthService);
    });

    it('must register a new user with encrypted password', async () => {
        const dto = {
            email: 'ceo@favorix.com',
            username: 'favorix_ceo',
            password: 'password123',
        };

        const result = await service.register(dto);

        expect(result).toHaveProperty('id');
        expect(result.email).toEqual(dto.email);
        expect(result.username).toEqual(dto.username);
        expect(result.password_hash).not.toEqual(dto.password);
    });
});
