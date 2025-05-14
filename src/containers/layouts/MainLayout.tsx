import React, { useEffect, useState } from 'react';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,

} from '@ant-design/icons';
import { Button, Layout, Menu, Spin } from 'antd';
import logo from '../../assets/images/Loqo.png'
import logo_s from '../../assets/images/logo_small.png'
import { sidebarItems } from '../../constants';
import { Navigate, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getUserProfile } from '../../api/user';


const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);


  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getUserProfile(); // call your API to validate user
        setAuthorized(true);
      } catch (error) {
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }
  if (!loading && !authorized) {
    return <Navigate to="/login" replace />;
  }
  return (
    <Layout className="h-screen overflow-hidden bg-background">

      <Sider
        collapsedWidth={131}
        width={287}
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="bg-neytral-700 pt-8 px-4 sticky top-0  my-4 ml-6  rounded-2xl"
      >
        <div className=' relative '>
          {/* Logo */}
          <div className='min-h-[48px] flex w-full justify-center items-center'>
            <AnimatePresence mode="wait">
              {collapsed ? (
                <motion.img
                  key="collapsed"
                  src={logo_s}
                  alt="Small Logo"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.1 }}
                  className="h-full object-contain"
                />
              ) : (
                <motion.img
                  key="expanded"
                  src={logo}
                  alt="Full Logo"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.1 }}
                  className="h-full object-contain"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Collapse Button */}
          <div className="absolute -right-5 -bottom-4 z-10">
            <Button
              className="bg-neytral-600 border-[0.3px] text-white rounded-full shadow-md -right-4"
              icon={collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '12px',
                width: 30,
                height: 30,
              }}
            />
          </div>

          <hr className="mt-5 border-neytral-500" />
        </div>

        {/* Menu */}
        <Menu
          theme="dark"
          className="mt-4 bg-neytral-700"
          defaultSelectedKeys={['2']}
          items={sidebarItems}
        />
      </Sider>

      <Layout className="bg-background">
        <Header className="bg-background" style={{ padding: 0 }} >
          <div className="flex">
            <button className="text-white bg-white/10 backdrop-blur-lg flex h-12 w-40 justify-center items-center mt-5 rounded-2xl mx-8 text-xl font-medium">
              12 : 01 : 58
            </button>
          </div>
        </Header>

        <Content className="p-2 mx-5 my-4 ">
          <Outlet />
        </Content>

      </Layout>
    </Layout>

  );
};

export default MainLayout;