import {  PlusOutlined,  
  } from '@ant-design/icons';

type Props = {
    onClick?:(params?:any)=>any
}

export default function AddButton({onClick}: Props) {
  return (
    <button onClick={onClick} className=" flex justify-center items-center rounded-md  text-white gap-4 text-sm">   Əlavə et <span className=" flex w-5 h-5 items-center justify-center border border-neytral-300 rounded-md"><PlusOutlined className=" text-neytral-300"/></span></button>

  )
}