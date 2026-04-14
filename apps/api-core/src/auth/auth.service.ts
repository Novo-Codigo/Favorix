import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class AuthService {
    async register(dto: RegisterDto) {
        const saltRounds = 10;
        const password_hash = await bcrypt.hash(
            dto.password,
            saltRounds
        );

        const newUser = {
            id: randomUUID(),
            email: dto.email,
            username: dto.username,
            password_hash: password_hash,
            created_at: new Date(),
        };

        return newUser;
    }
}
