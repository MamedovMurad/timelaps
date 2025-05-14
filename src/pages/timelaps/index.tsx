import React, { useEffect, useState } from 'react';
import { ConfigProvider, Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { getProjectsOptions } from '../../api/project';
import { Project } from '../../models/cameras';
import AddButton from '../../components/button/addButton';
import TimelapsAddEdit from './_components/add-edit';


const columns: TableProps<Project>['columns'] = [

  {
    title: 'Timelaps adı',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Shirketin',
    dataIndex: 'company.name',
    key: 'age',
    render: (_, record) => record.company.name,
  },
  {
    title: 'Layihənin başlama vaxtı',
    dataIndex: 'startDateStr',
    key: 'startDateStr',
  },
  {
    title: 'Layihənin bitmə vaxtı	',
    key: 'endTime',
    dataIndex: 'endTime',

  },
  {
    title: 'Timelaps',
    key: 'photoIntervalInMinute',
    dataIndex: 'photoIntervalInMinute',

  },
  {
    title: 'Action',
    key: 'action',
    render: (_, ) => (
      <Space size="middle">
        <a><EditOutlined className=' text-primary text-xl' /></a>
        <a><DeleteOutlined className=' text-primary text-xl' /></a>
      </Space>
    ),
  },
];



const TimelapsPage: React.FC = () => {
  const [data, setdata] = useState<Project[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  function getData() {
    getProjectsOptions().then((data) => {
      setdata(data.data.entities)
    })
  }

  console.log(data);

  useEffect(() => {
    getData()


  }, [])

  return (
    <main>
      <div className=" flex justify-between">
        <h2 className="text-white font-medium text-2xl mb-5">Timelaps</h2>

        <ul className=" flex items-center gap-x-4">
        
         
          <li className=" cursor-pointer h-9 flex items-center justify-center  ">
            <AddButton onClick={()=>setIsModalOpen(true)} />                    </li>

        </ul>
      </div>
      <ConfigProvider>

        <div className=" bg-neytral-700 p-4 rounded-xl">
          <Table<Project>
            columns={columns}
            rootClassName=' bg-neytral-700'
            dataSource={data}

            rowClassName={"bg-neytral-600 text-neytral-300  border-none  hover:bg-neytral-700 outline-none "}
            rowHoverable={false}
            className=' bg-neytral-700 text-white border-none  border-b-0 '
          />
        </div>
      </ConfigProvider>
      <TimelapsAddEdit isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </main>
  )
}


export default TimelapsPage;