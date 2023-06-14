import axios from '@/core/axios';
import {
  LoginFormDto,
  LoginResponseDto,
  RegisterFormDTO,
  RegisterResponseDTO,
  User,
} from './dto/auth.dto';
import { destroyCookie } from 'nookies';

export const login = async (values: LoginFormDto): Promise<LoginResponseDto> => {
  const { data } = await axios.post('/api/auth/login', values);
  return data;
};

export const register = async (values: RegisterFormDTO): Promise<RegisterResponseDTO> => {
  const { data } = await axios.post('/api/auth/register', values);
  return data;
};
export const getMe = async (): Promise<User> => {
  const { data } = await axios.get('/api/users/me');
  return data;
};
export const logout = () => {
  destroyCookie(null, '_token', { path: '/' });
};
