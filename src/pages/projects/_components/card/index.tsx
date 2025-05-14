
import { DeleteOutlined, DownloadOutlined, FolderOpenOutlined } from '@ant-design/icons';
import { Project } from '../../../../models/cameras';
import { Link } from 'react-router-dom';
type Props = {
  data: Project;
  path: string
}
function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  const value = bytes / Math.pow(k, i);
  return `${parseFloat(value.toFixed(decimals))} ${sizes[i]}`;
}
export default function ProjectCard({ data, path }: Props) {
  return (
    <li className=' bg-neytral-500 rounded-2xl  py-5 px-7 text-white'>
      <div><FolderOpenOutlined className=' text-2xl  text-primary' /></div>
      <Link to={path}><h4 className=' font-medium 2xl:text-2xl text-lg mt-5 mb-4'>{data.name}</h4></Link>
      <div><span className=' 2xl:text-base text-sm font-normal text-neytral-300 '>{formatBytes(data.filesSize)}- {data.filesCount} fayl </span></div>
      <div className=' flex justify-end gap-x-2 mt-5'>
        <button className=' bg-neytral-600  transition-all  hover:bg-neytral-300 rounded-lg h-10 w-10 2xl:h-16 2xl:w-16 flex justify-center items-center '>
          <DownloadOutlined className=' 2xl:text-2xl text-lg' />
        </button>
        <button className=' bg-neytral-600  transition-all hover:bg-neytral-300 rounded-lg h-10 w-10  2xl:h-16 2xl:w-16 flex justify-center items-center '>
          <DeleteOutlined className=' 2xl:text-2xl text-lg' />
        </button>
      </div>
    </li>
  )
}