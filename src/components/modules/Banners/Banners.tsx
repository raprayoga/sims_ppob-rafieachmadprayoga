import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import banner1 from "@/assets/images/banner/Banner-1.png";
import banner2 from "@/assets/images/banner/Banner-2.png";
import banner3 from "@/assets/images/banner/Banner-3.png";
import banner4 from "@/assets/images/banner/Banner-4.png";
import banner5 from "@/assets/images/banner/Banner-5.png";

import "swiper/css";

export function Banners({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <Swiper spaceBetween={50} slidesPerView={4.5}>
        <SwiperSlide>
          <Image src={banner1} alt="banner 1" width={280} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt="banner 2" width={280} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} alt="banner 3" width={280} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner4} alt="banner 4" width={280} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner5} alt="banner 5" width={280} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
