import axios from '@/core/axios';
import { LoginFormDto, LoginResponseDto } from './dto/auth.dto';

export const login = async (values: LoginFormDto): Promise<LoginResponseDto> => {
  const { data } = await axios.post('/api/auth/login', values);
  return data;
};
