// components/MultiCarousel.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


interface CarouselItem {
  id: number;
  title: string;
  image: string;
}

interface MultiCarouselProps {
  items: CarouselItem[];
  count:number,
  onclick:any
}

export const  MultiCarouselCamera: React.FC<MultiCarouselProps> = ({ items, count, onclick }) => {
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
        <SwiperSlide key={item.id} onClick={()=>onclick(item.image)}>
          <div className="rounded-lg shadow p-0 ">
            <img src={item.image} alt={item.title} className="w-full h-16 object-cover rounded-md" />
      
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};






