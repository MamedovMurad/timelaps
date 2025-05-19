// components/MultiCarousel.tsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
import { timeOnly } from '../../../../utility/dateUtils';
import { insertWordAfterSubstring } from '../../../../utility/replaceText';



interface CarouselItem {
  id:number, dateInsertedStr:string, size:number,url:string
}

interface MultiCarouselProps {
  items: CarouselItem[];
  count:number,
  onclick:any,
  currentFile:string
}

export const  MultiCarouselCamera: React.FC<MultiCarouselProps> = ({ items, count, onclick, currentFile }) => {


    


  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={3}


     
      breakpoints={{
        320: { slidesPerView: 5 },
        640: { slidesPerView: 5 },
        1024: { slidesPerView: count },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} onClick={()=>onclick(item.url)}>
          <div className={"rounded-lg shadow p-0 relative h-16 border  "+ (currentFile==item.url?" border-[#50C878]":"border-transparent")}>
            <img src={insertWordAfterSubstring(item?.url,"dev//","thumb_") } alt={item.dateInsertedStr} className="w-full h-full object-cover rounded-md " />
      <span className={' absolute bottom-0 right-0 rounded-l text-[9px]  text-white px-[6px] py-[3px] ' + (currentFile==item.url?"bg-[#50C878]":"bg-neytral-700")}>{timeOnly(item.dateInsertedStr) }</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};






