import React, { useEffect, useState } from 'react';
import { Empty, Popconfirm, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { deleteUser, getUsers } from '../../api/user';
import AddEditUser from './_components/addEdit';


interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
    email: string
}





const UsersPage: React.FC = () => {
    const columns: TableProps<DataType>['columns'] = [

        {
            title: 'Istifadeci adi',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Vezife adi',
            dataIndex: 'role',
            render(value) {
                return <Tag color='cyan' > {value.name}</Tag>
            },
            key: 'age',
        },
        {
            title: 'Telefon',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Ünvan',
            key: 'tags',
            dataIndex: 'tags',

        },
        {
            title: 'E-mail',
            key: 'email',
            dataIndex: 'email',

        },
        {
            title: 'Action',
            key: 'action',
            render: (data) => (
                <Space size="middle">
                    <a><EditOutlined onClick={()=>setCurrentuser(data)} className=' text-primary text-xl' /></a>
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => { deleteUser(data.id).then(()=>getUsersData())  }}

                        okText="Yes"
                        cancelText="No"
                    >
                        <a><DeleteOutlined className=' text-primary text-xl' /></a>
                    </Popconfirm>

                </Space>
            ),
        },
    ];
    const [users, setusers] = useState<any>(null)
    const [currentUser, setCurrentuser] = useState<any>(null)
    const [loading, setloading] = useState<boolean>(false)
    function getUsersData() {
        setloading(true)
        getUsers().then((data) => {
            setusers(data.data)
        }).finally(() => {
            setloading(false)
        })
    }
    useEffect(() => {
        getUsersData()
    }, [])

    console.log(currentUser);
    
    return (
        <main>
            <div className=' flex justify-between'>
                <h2 className="text-white font-medium text-2xl">Users</h2>
                <AddEditUser  userData={currentUser} setCurrentuser={setCurrentuser} getUsersData={getUsersData}  />

            </div>
            <hr className="border-neytral-300 opacity-20 rounded my-8" />
            <div className=" bg-neytral-700 p-4 rounded-xl">
                <Table<DataType>
                    columns={columns}
                    rootClassName=' bg-neytral-700'
                    dataSource={users}
                    loading={loading}
                    rowClassName={"bg-neytral-600 text-neytral-300  border-none  hover:bg-neytral-700 outline-none "}
                    rowHoverable={false}
                    locale={{ emptyText: <>{!loading && <Empty className=' bg-neytral-700 border-none' />}</> }}
                    className=' bg-neytral-700 text-white border-none  border-b-0 '
                />
            </div>
        </main>

    )
}

export default UsersPage;