import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;

  avatar: string;
  location: string;
  bio: string;
  interests: string;
  role: string;

  isEmailVerified: boolean;
}
