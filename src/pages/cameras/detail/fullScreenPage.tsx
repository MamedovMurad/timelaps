
import img1 from '../../../assets/images/bg.png'
import img3 from '../../../assets/images/test1.jpg'
import img4 from '../../../assets/images/test2.jpg'
import img12 from '../../../assets/images/camera.jpg'
import { MultiCarouselCamera } from "../_components/carousel"
import { useState } from "react"
import Calendar from "../_components/calendar"
import DisplayUi from "../_components/display"
import CameraSliderUi from "../_components/slider"
import WeatherUI from "../_components/weather"



const demoItems = [
    { id: 1, title: 'Car 1', image: img1 },
    { id: 2, title: 'Car 2', image: img12 },
    { id: 3, title: 'Car 3', image: img3 },
    { id: 4, title: 'Car 4', image: img4 },
    { id: 5, title: 'Car 5', image: img1 },
    { id: 14, title: 'Car 1', image: img12 },
    { id: 24, title: 'Car 2', image: img3 },
    { id: 34, title: 'Car 3', image: img4 },
    { id: 44, title: 'Car 4', image: img12 },
    { id: 54, title: 'Car 5', image: img1 },
    { id: 12, title: 'Car 1', image: img1 },
    { id: 22, title: 'Car 2', image: img12 },
    { id: 32, title: 'Car 3', image: img1 },
    { id: 42, title: 'Car 4', image: img12 },
    { id: 52, title: 'Car 5', image: img1 },
    { id: 142, title: 'Car 1', image: img1 },
    { id: 242, title: 'Car 2', image: img12 },
    { id: 342, title: 'Car 3', image: img1 },
    { id: 442, title: 'Car 4', image: img12 },
    { id: 542, title: 'Car 5', image: img1 },
];

export const FullScreenPage = () => {
    const [currnetImage, setcurrnetImage] = useState(img1)

    function handleFirstImageHandle(img: string) {
        console.log('fasf');


        setcurrnetImage(img)
    }

    return (
        <main>

            <div >
                <h2 className=" text-white font-medium text-2xl">TLB001</h2>
            </div>
            <hr className=" border-neytral-300 opacity-20 rounded my-8" />

            <div className=" flex gap-x-5 h-full">
                <div className=" w-9/12 ">
                    <div className=" mb-5">
                        <div className=" relative   block">
                            <MultiCarouselCamera items={demoItems} count={9.5} onclick={handleFirstImageHandle} />
                        </div>

                    </div>
                    <CameraSliderUi path={currnetImage} />
                </div>

                <div className=" w-3/12 flex flex-col justify-between flex-1  ">
                    <WeatherUI location="Bakı, Azərbaycan" degree={15}  />
                    <div >
                        <Calendar />
                    </div>
                    <DisplayUi isFull={true} />
                </div>
            </div>
        </main>

    )
}