import { FC } from 'react';
import style from './FileCard.module.scss';
import { getFileExtension } from '@/utils/getFileExtension';
import { isImage } from '@/utils/isImage';
import { FileTextOutlined } from '@ant-design/icons';
import { getColorByExtension } from '@/utils/getColorByExtension';
interface FileCardProps {
  filename: string;
  originalName: string;
}
const FileCard: FC<FileCardProps> = ({ filename, originalName }) => {
  const ext = getFileExtension(filename);
  const imgUrl =
    ext && isImage(ext) ? `https://panicky-bee-parka.cyclic.app/uploads/${filename}` : '';
  const color = getColorByExtension(ext);
  const classColor = style[color];
  return (
    <div className={style.root}>
      <div className={style.icon}>
        <i className={classColor}>{ext}</i>
        {isImage(ext) ? <img className={style.image} src={imgUrl} /> : <FileTextOutlined />}
      </div>
      <span>{originalName}</span>
    </div>
  );
};
export default FileCard;
