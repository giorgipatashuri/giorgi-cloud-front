import { Extension } from '@/utils/getColorByExtension';

export const getFileExtension = (filename: string) => {
  return filename.split('.').pop() as Extension;
};
