import axios from '@/core/axios';
import {
  LoginFormDto,
  LoginResponseDto,
  RegisterFormDTO,
  RegisterResponseDTO,
} from './dto/auth.dto';

export const login = async (values: LoginFormDto): Promise<LoginResponseDto> => {
  const { data } = await axios.post('/api/auth/login', values);
  return data;
};

export const register = async (values: RegisterFormDTO): Promise<RegisterResponseDTO> => {
  const { data } = await axios.post('/api/auth/register', values);
  return data;
};
