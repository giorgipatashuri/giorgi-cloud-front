import { FileItem } from '@/api/dto/files.dto';
import { FC } from 'react';
import style from './FileList.module.scss';
import FileCard from '../FileCard/FileCard';

interface FileListProps {
  items: FileItem[];
}
const FileList: FC<FileListProps> = ({ items }) => {
  return (
    <div className={style.root}>
      {items.map((item) => (
        <div key={item.id} className='file'>
          <FileCard filename={item.filename} originalName={item.originalName} />
        </div>
      ))}
    </div>
  );
};
export default FileList;
