import {
  FieldTimeOutlined,
  FolderOpenOutlined,
  UsergroupAddOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const sidebarItems = [
  {
    key: '/cameras',
    icon: <VideoCameraOutlined />,
    label: <Link to="/cameras" className=' text-lg font-medium'>Kamera</Link>,
  },
  {
    key: '/companies',
    icon: <FolderOpenOutlined />,
    label: <Link to="/companies" className=' text-lg font-medium'>Companies</Link>,
  },
  {
    key: '/timelaps',
    icon: <FieldTimeOutlined />,
    label: <Link to="/timelaps" className=' text-lg font-medium'>TimeLaps</Link>,
  },
  {
    key: '/projects',
    icon: <FolderOpenOutlined />,
    label: <Link to="/projects" className=' text-lg font-medium'>Projects</Link>,
  },
  {
    key: '/users',
    icon: <UsergroupAddOutlined />,
    label: <Link to="/users" className=' text-lg font-medium'>Users</Link>,
  },
];
