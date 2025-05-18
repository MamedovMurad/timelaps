// import BeforeAfterSlider from "../_components/before-after-slider"
// import img1 from '../../../assets/images/bg.png'
// import img3 from '../../../assets/images/test1.jpg'
// import img4 from '../../../assets/images/test2.jpg'
// import img12 from '../../../assets/images/camera.jpg'
// import { MultiCarouselCamera } from "../_components/carousel"
// import { useState } from "react"
// import Calendar from "../_components/calendar"
 import DisplayUi from "../_components/display"
import { useParams } from "react-router-dom"







export const CameraDetailPage = () => {
    // const [currnetImage, setcurrnetImage] = useState([img1, img12])
    // const [first, after] = currnetImage

      const { id } = useParams();
    // function handleFirstImageHandle(img: string) {
    //     console.log('fasf');


    //     setcurrnetImage([img, after])
    // }
    // function handleSecondImageHandle(img: string) {

    //     setcurrnetImage([first, img])
    // }
    return (
        <main>

            <div >
                <h2 className=" text-white font-medium text-2xl">TLB001</h2>
            </div>
            <hr className=" border-neytral-300 opacity-20 rounded my-8" />

            <div className=" flex gap-x-5">
                {/* <div className=" w-9/12">
                    <div className=" flex gap-x-2 mb-5">
                        <div className=" relative  w-6/12  block">
                            <MultiCarouselCamera items={demoItems} count={5.5} onclick={handleFirstImageHandle} />
                        </div>
                        <div className="line  w-1 min-w-1 bg-[#FEDBA5]"></div>
                        <div className=" relative flex-1 w-6/12   block">
                            <MultiCarouselCamera items={demoItems} count={5.5} onclick={handleSecondImageHandle} />
                        </div>
                    </div>
                    <BeforeAfterSlider beforeImg={after} afterImg={first} />
                </div> */}

                <div className=" w-3/12 flex-1 flex justify-between flex-col  ">
                    {/* <div>
                        <Calendar />
                    </div>
                    <div className="my-1">
                        <hr className=" bg-slate-400 text-slate-400 border-slate-400 " />
                    </div>
                    <div>
                        <Calendar />
                    </div> */}
                    <DisplayUi id={id+""} />
                </div>
            </div>
        </main>

    )
}