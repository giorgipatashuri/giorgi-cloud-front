export interface LoginFormDto {
  email: string;
  password: string;
}
export interface LoginResponseDto {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: number;
  email: string;
  password: string;
  fullname: string;
}

export type RegisterFormDTO = LoginFormDto & { fullname: string };
export type RegisterResponseDTO = LoginResponseDto;
