import { CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import { Link } from 'react-router-dom';


type Props = {
    setopen: (param: boolean) => void;
    id: string | number;
 
    handleRemoveCamera?:(param?:any)=>any;
}

export default function CardMenu({ setopen, id,  handleRemoveCamera }: Props) {
    return (
        <div className=" min-h-[260px] ">
            <div className="flex justify-between text-white ">
         
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={()=>handleRemoveCamera?.(id+"")}

                    okText="Yes"
                    cancelText="No"
                >
                         <button className=" flex justify-center items-center gap-x-1 hover:text-red-600 transition-colors ease-in">
                    <DeleteOutlined className=" text-xl " />
                    <span className=" text-xs opacity-70 ">Kameranı sil</span>
                </button>
                </Popconfirm>
                <button onClick={() => setopen(false)}><CloseOutlined className=" text-neytral-300 text-xl" /></button>
            </div>

            <ul className=" mt-10 text-white flex gap-3 flex-col">
                <li className=" border border-neytral-300 rounded-lg p-4 text-center ">
                    <Link to={'/cameras/system-settings'} >Sistem tənzimləmələri</Link>
                </li>
                <li className=" border border-neytral-300  rounded-lg p-4 text-center ">
                    <Link to={'/cameras/cloud-settings'}>Şəbəkə tənzimləmələri</Link>
                </li>
                <li className=" border border-neytral-300  rounded-lg p-4 text-center ">
                    <Link to={'/cameras/system-settings'}>Kamera tənzimləmələri</Link>
                </li>
                <li className=" border border-neytral-300  rounded-lg p-4 text-center ">
                    <Link to={'/cameras/logs'}>Kamera logları</Link>
                </li>
            </ul>
        </div>
    )
}