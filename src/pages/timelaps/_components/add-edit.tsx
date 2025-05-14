import { Form, Input, Modal, Select, TimePicker, DatePicker } from 'antd';
import { useEffect, useState } from 'react';
import { getCompanies } from '../../../api/companies';
import { CameraResponse } from '../../../models/cameras';
import { getCameras } from '../../../api/camera';
import dayjs from 'dayjs';

const { Option } = Select;
const format = 'HH:mm';

const daysOfWeek = [
  { label: 'Bazar ertəsi', value: '1' },
  { label: 'Çərşənbə axşamı', value: '2' },
  { label: 'Çərşənbə', value: '3' },
  { label: 'Cümə axşamı', value: '4' },
  { label: 'Cümə', value: '5' },
  { label: 'Şənbə', value: '6' },
  { label: 'Bazar', value: '7' },
];

const TimelapsAddEdit = ({ isModalOpen, setIsModalOpen }: any) => {
  const [companies, setCompanies] = useState<{ label: string; value: string }[] | null>(null);
  const [data, setData] = useState<CameraResponse[] | null>(null);

  const [form] = Form.useForm();

  const startTime = dayjs('12:00', 'HH:mm');
  const endTime = dayjs('18:00', 'HH:mm');

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function onFinish(values: any) {
    console.log('Form values:', values);
    // Here you would send this data to your backend
  }

  function getCamerasData() {
    getCameras().then((data) => {
      setData(data.data.entities);
    });
  }

  useEffect(() => {
    getCamerasData();
    getCompanies().then((data) => {
      setCompanies(data?.data?.entities?.map((item: any) => ({ label: item.name, value: item.id })));
    });
  }, []);

  return (
    <Modal
      className="!bg-neytral-700"
      title={<div className="text-white bg-neytral-700">Timelapse əlavə et</div>}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okButtonProps={undefined}
      cancelButtonProps={undefined}
    >
      <Form layout="vertical" onFinish={onFinish} form={form} className="bg-neytral-700">
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
            name="company_id"
            label="Şirkət"
            rules={[{ required: true, message: 'Şirkət seçilməlidir' }]}
          >
            <Select
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
            name="start_date"
            label="Layihənin başlama vaxtı"
            rules={[{ required: true, message: 'Zəhmət olmasa başlama tarixini daxil edin' }]}
          >
            <DatePicker className="w-full bg-neytral-600 text-white border border-neytral-300 h-10" />
          </Form.Item>

          <Form.Item
            className="[&_.ant-form-item-label>label]:text-white"
            name="end_date"
            label="Layihənin bitmə vaxtı"
            rules={[{ required: true, message: 'Zəhmət olmasa bitmə tarixini daxil edin' }]}
          >
            <DatePicker className="w-full bg-neytral-600 text-white border border-neytral-300 h-10 text-white" />
          </Form.Item>

          <Form.Item
            className="[&_.ant-form-item-label>label]:text-white"
            name="week_days"
            label="Həftənin günləri"
            rules={[{ required: true, message: 'Günlər seçilməlidir' }]}
          >
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Gün seçin"
              className="bg-neytral-600 hover:bg-neytral-600 border border-neytral-300 placeholder:!text-white py-2 text-white"
            >
              {daysOfWeek.map((item) => (
                <Option key={item.value} value={item.value}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            className="[&_.ant-form-item-label>label]:text-white"
            name="camera_ids"
            label="Kameralar"
            rules={[{ required: true, message: 'Kamera seçilməlidir' }]}
          >
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Kamera seçin"
              className="bg-neytral-600 hover:bg-neytral-600 border border-neytral-300 placeholder:!text-white py-2 text-white"
            >
              {data?.map((item) => (
                <Option key={item.id + ""} value={item.id + ""}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            className="[&_.ant-form-item-label>label]:text-white"
            name="photo_interval"
            label="Foto interval (dəqiqə)"
            rules={[{ required: true, message: 'Zəhmət olmasa interval daxil edin' }]}
          >
            <Input
              type="number"
              className="bg-neytral-600 hover:bg-neytral-500 border border-neytral-300 placeholder:text-white py-2 text-white"
              placeholder="Məsələn: 5"
            />
          </Form.Item>

          <Form.Item
            className="[&_.ant-form-item-label>label]:text-white"
            name="time_range"
            label="Başlama və Bitmə vaxtı"
            rules={[{ required: true, message: 'Zəhmət olmasa vaxt seçin' }]}
          >
            <TimePicker.RangePicker
              className="w-full bg-neytral-600 hover:bg-neytral-500 border border-neytral-300 placeholder:text-white py-2 text-white"
              defaultValue={[startTime, endTime]}
              format={format}
            />
          </Form.Item>
        </div>

        <Form.Item>
          <button type="submit" className="bg-primary text-white w-full py-3 rounded-md">
            Yadda saxla
          </button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TimelapsAddEdit;
