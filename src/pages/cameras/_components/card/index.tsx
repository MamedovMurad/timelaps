
import { CameraDisabledIocn, CircleWarningIcon, EllipseVector, PhotoIcon, SettingIcon, UpperChartIcon } from "../../../../svg"

import CardDetail from "./cardDetail"
import { CalendarOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Spin, Switch } from "antd";
import { useState } from "react";
import CardMenu from "./cardMenu";
import { CameraResponse } from "../../../../models/cameras";


type Props = {
    data: CameraResponse
    handleClickCamera:(id:string, callBack:(params:boolean)=>void)=>void
}

export default function CameraCard({ data,handleClickCamera }: Props) {
    const [hide, sethide] = useState(false)
    const [open, setopen] = useState(false)
    const [loading, setloading] = useState(false)
    
    return (
        <li className=" bg-neytral-500 rounded-2xl  p-4 overflow-hidden relative  " >
            {
                open ? <CardMenu setopen={setopen} />

                    : <div className="flex gap-2 justify-between">
                        <div className=" w-10/12 text-white min-h-[260px]">
                            <div className=" h-[240px] ">
                                <div className={" w-full transition-all duration-200 overflow-hidden  " + (hide ? " opacity-0 h-0 w-0 " : "")}>
                                    <img src={data.lastFileUrl} alt="" className=" w-full  rounded-2xl h-[240px]  " />
                                </div>


                                {
                                    hide && <CardDetail />
                                }

                            </div>

                            <div className="flex w-full mt-2 gap-x-2">
                                <div className=" bg-neytral-600 w-7/12 p-3 rounded-lg">
                                    <div className="flex items-center justify-between cursor-pointer" onClick={() => setopen(!open)} >
                                        <h5>{data.name}</h5>
                                        <SettingIcon />
                                    </div>

                                    <div className="flex gap-x-1 items-center mt-3">
                                        <span><CalendarOutlined /></span>
                                        <span className=" text-[10px] font-normal">06.01.2025  12:00 </span>
                                    </div>

                                    <div className="flex  items-center mt-3 justify-between">
                                        <div className="flex gap-x-1 items-center">
                                            <span><VideoCameraOutlined className=" text-primary" /></span>
                                            <span className=" text-[10px] font-normal">{data.type}</span>
                                        </div>

                                        <Switch defaultChecked size="small" />
                                    </div>
                                </div>

                                <div className="bg-neytral-600 w-5/12 p-3 rounded-lg relative flex justify-center items-center cursor-pointer" onClick={() => sethide(!hide)}  >
                                    <EllipseVector />
                                    <div className="absolute  w-full ">
                                        <div className=" flex flex-col items-center justify-center h-full">
                                            <p className=" text-sm">{data.usedStorage} TB</p>
                                            <span className=" text-[10px] text-neytral-300">{data.totalStorage} TB-dan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <ul className="flex flex-col gap-3 ">
                                <li className=" bg-neytral-600 rounded-lg w-16 h-16 flex justify-center items-center flex-col">
                                    <UpperChartIcon />
                                    <span className=" text-white text-x mt-1">450 ms</span>
                                </li>
                                <li className=" bg-neytral-600 rounded-lg w-16 h-16 flex justify-center items-center flex-col">
                                    <CircleWarningIcon />
                                    <span className=" text-white text-xs mt-1">Deaktiv</span>
                                </li>
                                <li className=" bg-neytral-600 rounded-lg w-16 h-16 flex justify-center items-center flex-col">
                                    <CameraDisabledIocn />
                                    <span className=" text-white text-xs mt-1">0 V</span>
                                </li>
                                <li className=" bg-neytral-600 rounded-lg w-16 h-36 flex justify-center items-center flex-col">
                                    <button onClick={()=>handleClickCamera(data.id+"", setloading )}>{loading?<Spin />:<PhotoIcon />}</button>
                                    <span className=" text-white text-xs mt-1"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
            }




        </li>
    )
}