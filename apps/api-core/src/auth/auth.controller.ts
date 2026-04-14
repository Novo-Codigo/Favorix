import {
    Controller,
    Post,
    Body
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import {
    ApiTags,
    ApiOperation,
    ApiResponse
} from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    @ApiOperation({
        summary: 'Registers a new user'
    })
    @ApiResponse({
        status: 201,
        description: 'User created successfully.'
    })
    async register(@Body() registerDto: RegisterDto) {
        const user = await this.authService.register(registerDto);

        const {
            password_hash,
            ...safeUser
        } = user;

        return safeUser;
    }
}