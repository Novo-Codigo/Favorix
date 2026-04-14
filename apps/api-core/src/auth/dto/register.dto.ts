import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
    @ApiProperty({
        example: 'ceo@favorix.com'
    })
    email!: string;
    @ApiProperty({
        example: 'iamtheceobitch'
    })
    username!: string;
    @ApiProperty({
        example: 'password123'
    })
    password!: string;
}