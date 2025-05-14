
import { RouterProvider } from 'react-router-dom';

import router from './routers';
import { message } from 'antd';
import { useMessageStore } from './store/useMessageStore';
import { useEffect } from 'react';

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const setMessageApi = useMessageStore((state) => state.setMessageApi);
  
  console.log('dfadfa');
  useEffect(() => {
    setMessageApi(messageApi);

    
  }, [messageApi, setMessageApi]);

  return (
    <> {contextHolder} <RouterProvider router={router} /></>
  )
}

export default App
