import BeforeAfterSlider from "../_components/before-after-slider"
import img1 from '../../../assets/images/bg.png'
import img12 from '../../../assets/images/camera.jpg'
import { MultiCarouselCamera } from "../_components/carousel"
import { useEffect, useState } from "react"
import Calendar from "../_components/calendar"
import DisplayUi from "../_components/display"
import { useParams } from "react-router-dom"
import { getFilesCarousel } from "../../../api/camera"
import { getStartEndOfDayMs } from "../../../utility/dateUtils"
import { Spin } from "antd"







export const CameraDetailPage = () => {
    const [currnetImage, setcurrnetImage] = useState([img1, img12])
    const [first, after] = currnetImage
    console.log(currnetImage, 'currentImage');

    const [files, setFiles] = useState<{ id: number, dateInsertedStr: string, size: number, url: string }[]>([]);
    const [before_files, before_setFiles] = useState<{ id: number, dateInsertedStr: string, size: number, url: string }[]>([]);
    const [loading, setloading] = useState(false);
   // const [searchParams] = useSearchParams();
    //const cameraName = searchParams.get('name'); // ?myQuery=value



    const { id } = useParams();
    function handleFirstImageHandle(img: string) {
        console.log('fasf');


        setcurrnetImage([img, after])
    }
    function handleSecondImageHandle(img: string) {

        setcurrnetImage([first, img])
    }

    console.log(after, 'after');



    function getDataBefore(date?: Date) {
        console.log(date, 'date__');

        setloading(true);
        if (date) {
            const { fromDateMs, toDateMs } = getStartEndOfDayMs(date)
            getFilesCarousel(id + "", fromDateMs, toDateMs).then((data) => {
                if (data?.data?.entities?.length < 1) return;
                before_setFiles(data?.data?.entities);

                handleFirstImageHandle(data?.data?.entities?.[2].url)

            }).finally(() => {
                setloading(false);
            });

            return
        }
        getFilesCarousel(id + "").then((data) => {
            console.log('test__');

            if (data?.data?.entities?.length < 1) return;
            before_setFiles(data?.data?.entities);

            handleFirstImageHandle(data?.data?.entities?.[2].url)

        }).finally(() => {
            setloading(false);
        });

        return
    }
    function getData(date?: Date) {
        console.log(date, 'date__');

        setloading(true);
        if (date) {
            const { fromDateMs, toDateMs } = getStartEndOfDayMs(date)
            getFilesCarousel(id + "", fromDateMs, toDateMs).then((data) => {
                if (data?.data?.entities?.length < 1) return;
                setFiles(data?.data?.entities);

                handleSecondImageHandle(data?.data?.entities[0]?.url)
            }).finally(() => {
                setloading(false);
            });

            return
        }
        getFilesCarousel(id + "").then((data) => {
            console.log('test__');

            if (data?.data?.entities?.length < 1) return;
            setFiles(data?.data?.entities);

            handleSecondImageHandle(data?.data?.entities[0]?.url)
        }).finally(() => {
            setloading(false);
        });

        return
    }

    useEffect(() => {
        getData();
    }, [id]);





    return (
        <main>

            <div >
                <h2 className=" text-white font-medium text-2xl">TLB001</h2>
            </div>
            <hr className=" border-neytral-300 opacity-20 rounded my-8" />

            <div className=" flex gap-x-5">
                {
                    loading ? <div className="flex justify-center items-center min-h-96 w-full"><Spin size="large" /></div> : <div className=" w-9/12">
                        <div className=" flex gap-x-2 mb-5">
                            <div className=" relative  w-6/12  block">
                                <MultiCarouselCamera items={before_files} count={5.5} currentFile={first} onclick={handleFirstImageHandle} />
                            </div>
                            <div className="line  w-1 min-w-1 bg-[#FEDBA5]"></div>
                            <div className=" relative flex-1 w-6/12   block">
                                <MultiCarouselCamera items={files} currentFile={after} count={5.5} onclick={handleSecondImageHandle} />
                            </div>
                        </div>
                        <BeforeAfterSlider beforeImg={after} afterImg={first} />
                    </div>
                }


                <div className=" w-3/12 flex-1 flex justify-between flex-col  ">
                    <div>
                        <Calendar getData={getDataBefore} />
                    </div>
                    <div className="my-1">
                        <hr className=" bg-slate-400 text-slate-400 border-slate-400 " />
                    </div>
                    <div>
                        <Calendar getData={getData} />
                    </div>
                    <DisplayUi id={id + ""} />
                </div>
            </div>
        </main>

    )
}