import React, { useEffect, useState } from 'react';
import { ConfigProvider, Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Company } from '../../models/cameras';
import { getCompanies } from '../../api/companies';


const columns: TableProps<Company>['columns'] = [

  {
    title: 'Şirkətin adı',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Əlaqədar şəxs',
    dataIndex: 'representer',
    key: 'representer',
  },
  {
    title: 'Telefon',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Ünvan',
    key: 'address',
    dataIndex: 'address',

  },
  {
    title: 'E-mail',
    key: 'email',
    dataIndex: 'email',

  },
  {
    title: 'Action',
    key: 'action',
    render: (_,) => (
      <Space size="middle">
        <a><EditOutlined className=' text-primary text-xl' /></a>
        <a><DeleteOutlined className=' text-primary text-xl' /></a>
      </Space>
    ),
  },
];



const CompanyPage: React.FC = () => {
  const [data, setdata] = useState<Company[]>([])

  function getData() {
    getCompanies().then((data) => {
      setdata(data.data.entities)
    })
  }

  console.log(data);

  useEffect(() => {
    getData()


  }, [])
  return (
    <ConfigProvider


    >
      <div className=" bg-neytral-700 p-4 rounded-xl">
        <Table<Company>
          columns={columns}
          rootClassName=' bg-neytral-700'
          dataSource={data}

          rowClassName={"bg-neytral-600 text-neytral-300  border-none  hover:bg-neytral-700 outline-none "}
          rowHoverable={false}
          className=' bg-neytral-700 text-white border-none  border-b-0 '
        />
      </div>
    </ConfigProvider>
  )
}

export default CompanyPage;