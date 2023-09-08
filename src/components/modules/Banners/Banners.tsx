import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { sliceState } from "@/interface/state";
import { bannersAsync } from "@/store/banners";
import "swiper/css";

export function Banners({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const dispatch: Dispatch<any> = useDispatch();
  const banners = useSelector((state: sliceState) => state.banners.data);

  useEffect(() => {
    dispatch(bannersAsync());
  }, [dispatch]);

  return (
    <div {...props}>
      <Swiper spaceBetween={50} slidesPerView={4.5}>
        {banners.map((service) => (
          <SwiperSlide key={service.banner_image}>
            <Image
              src={service.banner_image}
              alt={service.banner_name}
              width={280}
              height={150}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
