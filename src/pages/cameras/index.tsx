import { useEffect, useState } from "react"
import { deleteCamera, getCameras, takePhoto } from "../../api/camera"
import CameraCard from "./_components/card"
import { CameraResponse } from "../../models/cameras"
import { Empty, Spin } from "antd"
import {
    VideoCameraOutlined,
} from '@ant-design/icons';
import { GoProIcon } from "../../svg"
import AddButton from "../../components/button/addButton"
import { useNavigate } from "react-router-dom"

type Props = {}

export default function CamerPage({ }: Props) {
    const [data, setData] = useState<CameraResponse[] | null>(null)
    const [loading, setloading] = useState(false)

    function getCamerasData() {
        setloading(true)
        getCameras().then((data) => {
            setData(data.data.entities)
        }).finally(() => {
            setloading(false)
        })
    }
    useEffect(() => {
        getCamerasData()

    }, [])
    const navigate = useNavigate()
    function handleClickCamera(id: string, setloading: (param: boolean) => void) {

        setloading(true)
        takePhoto(id).then(() => {

        }).finally(() => {
            getCamerasData()
            setloading(false)
        })
    }

    function handleRemoveCamera(id: string) {
        deleteCamera(id).then(() => {

            getCamerasData()
        })
    }

    function goToAddCamera() {
        navigate("/cameras/cloud-settings")
    }

    return (
        <main>
            <div className=" flex justify-between">
                <h2 className="text-white font-medium text-2xl">Kamera</h2>

                <ul className=" flex items-center gap-x-4">
                    <li className=" cursor-pointer h-9 w-32 flex items-center justify-center border rounded-md border-neytral-500 text-white gap-2 text-sm"><VideoCameraOutlined className=" text-primary " /> DSLR</li>
                    <li className=" cursor-pointer h-9 w-32 flex items-center justify-center border rounded-md border-neytral-500 text-white gap-2 text-sm"><GoProIcon /> GoPro</li>
                    <li className=" cursor-pointer h-9 w-32 flex items-center justify-center border rounded-md border-neytral-500 text-white gap-2 text-sm"><span className=" w-5 h-5 rounded-full bg-[#50C878]"></span> Aktiv</li>
                    <li className=" cursor-pointer h-9 w-32 flex items-center justify-center border rounded-md border-neytral-500 text-white gap-2 text-sm"><span className=" w-5 h-5 rounded-full bg-[#FA5F55]"></span> Deaktiv</li>
                    <li className=" cursor-pointer h-9 flex items-center justify-center  ">
                        <AddButton onClick={goToAddCamera} />                    </li>

                </ul>
            </div>
            <hr className="border-neytral-300 opacity-20 rounded my-8" />

            <div className="h-[calc(100vh-201px)] overflow-y-auto rounded-2xl bg-neytral-700 p-5">
                {data && data.length > 0 ? (
                    <ul className="grid grid-cols-3 gap-2">
                        {data.map((item) => (
                            <CameraCard key={item.id} data={item} handleClickCamera={handleClickCamera} handleRemoveCamera={handleRemoveCamera} />
                        ))}
                    </ul>
                ) : (
                    loading ? (
                        <div className="flex justify-center items-center h-full">
                            <Spin size="large" />
                        </div>
                    ) : <Empty className="flex justify-center items-center h-full" />
                )}
            </div>
        </main>
    )
}