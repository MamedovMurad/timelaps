// components/MyForm.tsx
import React from "react";
import { Form, Input, Button } from "antd";
import { CameraTypes } from "./cameraTypes";

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
}

const CloudSettingsForm: React.FC = () => {
    const [form] = Form.useForm<FormValues>();

    const onFinish = (values: FormValues) => {
        console.log("Form Submitted:", values);
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
        >
            <div className="grid grid-cols-5 gap-x-6 text-white">
                <Form.Item
                    label={<span className=" text-white">Ad</span>}
                    name="name"
                >
                    <Input placeholder="Enter your first name" className=" h-12 !bg-transparent hover:bg-transparent border-neytral-300 !text-neytral-300 placeholder-neytral-300 " />
                </Form.Item>
                <Form.Item
                    label={<span className=" text-white">IP</span>}
                    name="IP"
                >
                    <Input placeholder="Enter your first name" className=" h-12 !bg-transparent hover:bg-transparent border-neytral-300 !text-neytral-300 placeholder-neytral-300 " />
                </Form.Item>
                <Form.Item
                    label={<span className=" text-white">Port</span>}
                    name="firstName"
                >
                    <Input placeholder="Enter your first name" className=" h-12 !bg-transparent hover:bg-transparent border-neytral-300 !text-neytral-300 placeholder-neytral-300 " />
                </Form.Item>
                <Form.Item
                    label={<span className=" text-white">Şifrə</span>}
                    name="firstName"
                >
                    <Input placeholder="Enter your first name" className=" h-12 !bg-transparent hover:bg-transparent border-neytral-300 !text-neytral-300 placeholder-neytral-300 " />
                </Form.Item>
                <Form.Item
                    label={<span className=" text-white">Hostname</span>}
                    name="firstName"
                >
                    <Input placeholder="Enter your first name" className=" h-12 !bg-transparent hover:bg-transparent border-neytral-300 !text-neytral-300 placeholder-neytral-300 " />
                </Form.Item>
                <Form.Item
                    label={<span className=" text-white">SSH İstifadəçi adı</span>}
                    name="firstName"
                >
                    <Input placeholder="Enter your first name" className=" h-12 !bg-transparent hover:bg-transparent border-neytral-300 !text-neytral-300 placeholder-neytral-300 " />
                </Form.Item>

                <Form.Item
                    label={<span className=" text-white">Model</span>}
                    name="firstName"
                >
                    <Input placeholder="Enter your first name" className=" h-12 !bg-transparent hover:bg-transparent border-neytral-300 !text-neytral-300 placeholder-neytral-300 " />
                </Form.Item>
                <Form.Item
                    label={<span className=" text-white">Nömrə</span>}
                    name="firstName"
                >
                    <Input placeholder="Enter your first name" className=" h-12 !bg-transparent hover:bg-transparent border-neytral-300 !text-neytral-300 placeholder-neytral-300 " />
                </Form.Item>

                <Form.Item
                    label={<span className=" text-white">USB adı</span>}
                    name="firstName"
                >
                    <Input placeholder="Enter your first name" className=" h-12 !bg-transparent hover:bg-transparent border-neytral-300 !text-neytral-300 placeholder-neytral-300 " />
                </Form.Item>


            </div>

            <CameraTypes />


            <Form.Item>
                <Button className=" bg-primary text-white border-none h-12" htmlType="submit" block>
                    Submit
                </Button>

            </Form.Item>
        </Form>
    );
};

export default CloudSettingsForm;
