import img1 from '../../../assets/images/bg.png';

import { MultiCarouselCamera } from "../_components/carousel";
import { useEffect, useState } from "react";
import Calendar from "../_components/calendar";
import DisplayUi from "../_components/display";
import CameraSliderUi from "../_components/slider";
import WeatherUI from "../_components/weather";
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getFilesCarousel } from '../../../api/camera';
import { Spin } from 'antd';
import { BackIcon } from '../../../svg';
import { getStartEndOfDayMs } from '../../../utility/dateUtils';



export const FullScreenPage = () => {
  const [currnetImage, setcurrnetImage] = useState(img1);
  const [files, setFiles] = useState<{ id: number, dateInsertedStr: string, size: number, url: string }[]>([]);
  const [loading, setloading] = useState(false);
  const [searchParams] = useSearchParams();
  const cameraName = searchParams.get('name'); // ?myQuery=value

  const { id } = useParams();

  function getData(date?: Date) {
    setloading(true);

    if (date) {
      const { fromDateMs, toDateMs } = getStartEndOfDayMs(date)
      getFilesCarousel(id + "", fromDateMs, toDateMs).then((data) => {
        if (data?.data?.entities?.length < 1) return;
        setFiles(data?.data?.entities);
        setcurrnetImage(data?.data?.entities[0].url);
      }).finally(() => {
        setloading(false);
      });

      return
    }

    getFilesCarousel(id + "").then((data) => {
      if (data?.data?.entities?.length < 1) return;
      setFiles(data?.data?.entities);
      setcurrnetImage(data?.data?.entities[0].url);
    }).finally(() => {
      setloading(false);
    });

    return
  }

  useEffect(() => {
    getData();
  }, [id]);



  function handleFirstImageHandle(img: string) {
    setcurrnetImage(img);
  }

  return (
    <main>
      <div className=' flex'>
        <div>
          <Link to={"/cameras"} className=' flex gap-4 items-center hover:bg-neytral-500 transition-colors p-3 rounded-md'>
            <span><BackIcon /></span>
            <h2 className="text-white font-medium text-2xl">{cameraName}</h2>
          </Link>
        </div>
      </div>
      <hr className="border-neytral-300 opacity-20 rounded my-8" />




      <div className="flex gap-x-5 h-full">
        {
          loading ? <div className='flex justify-center items-center min-h-96 w-full'>
            <Spin size='large' />
          </div> : <div className="w-9/12">
            <div className="mb-5">
              <div className="relative block">
                <MultiCarouselCamera items={files} count={9.5} onclick={handleFirstImageHandle} currentFile={currnetImage} />
              </div>
            </div>
            <CameraSliderUi path={currnetImage} />
          </div>
        }


        <div className="w-3/12 flex flex-col justify-between flex-1">
          <WeatherUI location="Bakı, Azərbaycan" degree={15} />
          <div>
            <Calendar getData={getData} />
          </div>
          <DisplayUi isFull={true} id={id + ""} />
        </div>
      </div>

    </main>
  );
};
