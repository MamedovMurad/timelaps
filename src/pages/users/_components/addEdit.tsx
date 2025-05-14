import React, { useEffect, useState } from 'react';
import { Button, Drawer, Form, Input, Select, Space } from 'antd';
import { getProjectsOptions } from '../../../api/project';
import { getCompanies } from '../../../api/companies';
import { crateUser } from '../../../api/user';

const { Option } = Select;

const AddEditUser=({userData, setCurrentuser, getUsersData}:any) => {
  const [open, setOpen] = useState(false);
  const [companies, setCompanies] = useState<{ label: string; value: string }[] | null>(null);
  const [permissions, setPermissions] = useState<{ label: string; value: string }[] | null>(null);

  const [form] = Form.useForm(); // form instance
  console.log({userData});
  const showDrawer = () => {
    setOpen(true);

    if (userData) {
    
        
        // Pre-fill form with userData when editing
        form.setFieldsValue({
          ...userData,
          role: userData.role?.id,
          company_id: userData.company?.id,
          projects: userData.projects?.map((p: any) => p.id),
        });
  
        if (userData.company?.id) {
          handleSelectCompany(userData.company.id);
        }
      }
  };

  const onClose = () => {
    form.resetFields(); // reset form on close
    setOpen(false);
    if (setCurrentuser) {
        setCurrentuser(null)
    }
  };

  const onFinish = (values: any) => {
    values.projects = values.projects?.map((item: any) => ({ id: item }));
    values.role = { id: values.role };
    values.language = { id: 1 };

    crateUser(values).then(() => {
      onClose();
      getUsersData()
    });
  };

  useEffect(() => {
    getCompanies().then((data) => {
      setCompanies(data?.data?.entities?.map((item: any) => ({ label: item.name, value: item.id })));
    });
  }, []);

  useEffect(() => {
        if (userData) {
           showDrawer()
        }
  }, [userData?.id])
  

  function handleSelectCompany(id: string) {
    getProjectsOptions(id).then((data) => {
      setPermissions(data?.data?.entities?.map((item: any) => ({ label: item.name, value: item.id })));
    });
  }

  return (
    <>
      <button onClick={showDrawer} className="border-primary border rounded-md py-2 px-4 text-primary">
        İstifadəçi əlavə et
      </button>

      <Drawer
        title={<span className="text-white">Add User</span>}
        onClose={onClose}
        open={open}
        width={580}
        className="!bg-neytral-700"
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <div className="grid grid-cols-2 gap-x-2">
            <Form.Item
              className="[&_.ant-form-item-label>label]:text-white"
              name="name"
              label="Ad"
              rules={[{ required: true, message: 'Zəhmət olmasa istifadəçi adını daxil edin' }]}
            >
              <Input
                className="bg-neytral-600 hover:bg-neytral-500 border border-neytral-300 placeholder:text-white py-2 text-white"
                placeholder="Ad"
              />
            </Form.Item>

            <Form.Item
              className="[&_.ant-form-item-label>label]:text-white"
              name="surname"
              label="Soyad"
              rules={[{ required: true, message: 'Zəhmət olmasa soyad daxil edin' }]}
            >
              <Input
                className="bg-neytral-600 hover:bg-neytral-500 border border-neytral-300 placeholder:text-white py-2 text-white"
                placeholder="Soyad"
              />
            </Form.Item>

            <Form.Item
              className="[&_.ant-form-item-label>label]:text-white"
              name="email"
              label="Email"
              rules={[{ type: 'email', required: true, message: 'Zəhmət olmasa düzgün email daxil edin' }]}
            >
              <Input
                className="bg-neytral-600 hover:bg-neytral-500 border border-neytral-300 placeholder:text-white py-2 text-white"
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              className="[&_.ant-form-item-label>label]:text-white"
              name="role"
              label="Vəzifə"
              rules={[{ required: true, message: 'Vəzifə seçilməlidir' }]}
            >
              <Select
                placeholder="Vəzifə seçin"
                className="border border-neytral-300 rounded-md h-10 bg-neytral-600 placeholder:text-white"
              >
                <Option value="1">Super Admin</Option>
                <Option value="2">Admin</Option>
                <Option value="3">User</Option>
              </Select>
            </Form.Item>

            <Form.Item
              className="[&_.ant-form-item-label>label]:text-white"
              name="company_id"
              label="Şirkət"
              rules={[{ required: true, message: 'Şirkət seçilməlidir' }]}
            >
              <Select
              
                onSelect={handleSelectCompany}
                placeholder="Şirkət seçin"
                className="border border-neytral-300 rounded-md h-10 bg-neytral-600 placeholder:text-white"
              >
                {companies?.map((item) => (
                  <Option value={item.value} key={item.value}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              className="[&_.ant-form-item-label>label]:text-white"
              name="passwordStr"
              label="Şifrə"
              rules={[{ required: true, message: 'Şifrə tələb olunur' }]}
            >
              <Input.Password
                className="bg-neytral-600 hover:bg-neytral-600 border border-neytral-300 placeholder:!text-white py-2 text-white"
                placeholder="Şifrə"
              />
            </Form.Item>
          </div>

          {permissions && (
            <Form.Item
              className="[&_.ant-form-item-label>label]:text-white"
              name="projects"
              label="İcazələr"
              rules={[{ required: true, message: 'Layihə seçilməlidir' }]}
            >
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Layihə seçin"
                className="bg-neytral-600 hover:bg-neytral-600 border border-neytral-300 placeholder:!text-white py-2 text-white"
              >
                {permissions.map((item) => (
                  <Option key={item.value} value={item.value}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          )}

          <Form.Item>
            <button type="submit" className="bg-primary text-white w-full py-3 rounded-md">
              Yadda saxla
            </button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default AddEditUser;
