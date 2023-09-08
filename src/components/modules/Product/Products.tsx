import React, { useEffect } from "react";
import Image from "next/image";
import { cn } from "@/utils";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { servicesAsync } from "@/store/services";
import { sliceState } from "@/interface/state";
import Link from "next/link";

export function Products({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const dispatch: Dispatch<any> = useDispatch();
  const services = useSelector((state: sliceState) => state.services.data);

  useEffect(() => {
    dispatch(servicesAsync());
  }, [dispatch]);

  return (
    <div
      {...props}
      className={cn(
        "flex gap-5 justify-between overflow-x-auto overflow-y-hidden py-2",
        className
      )}
    >
      {services.map((service) => (
        <Link
          key={service.service_code}
          className="text-center min-w-[70px] max-w-[70px]"
          href={`/purchase/${service.service_code}`}
        >
          <Image
            src={service.service_icon}
            alt={service.service_code}
            className="mb-2 w-[70px] h-[70px]"
            width={70}
            height={70}
          />
          <p className="text-xs leading-none">{service.service_name}</p>
        </Link>
      ))}
    </div>
  );
}
