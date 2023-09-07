import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils";
import bgSaldo from "@/assets/images/Background-Saldo.png";
import profilePhoto from "@/assets/images/illustration/Profile-Photo.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export function PersonalInfo({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [sShowSaldo, setIsShowSaldo] = useState(false);
  const currentSaldo = 1000000;

  const handleToggleShow = () => {
    setIsShowSaldo((prevState) => {
      return !prevState;
    });
  };

  const saldoFormat = (saldo: number): string => {
    if (sShowSaldo) return "&#9679; &#9679; &#9679; &#9679;";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(saldo);
  };

  return (
    <div {...props} className={cn("flex justify-between", className)}>
      <div className="w-1/2">
        <Image
          src={profilePhoto}
          alt="profile photo"
          width={70}
          height={70}
          className="w-[70px] h-[70px]"
        />
        <p className="text-lg mt-2">Selamat datang,</p>
        <h4 className="text-4xl font-semibold">Kristanto Wibowo</h4>
      </div>
      <div className="w-1/2">
        <div className="relative">
          <Image src={bgSaldo} alt="background saldo" />
          <div className="absolute text-white top-0 bottom-0 p-3 flex flex-col justify-between">
            <p>Saldo anda</p>
            <p className="text-3xl">
              {sShowSaldo &&
                new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                }).format(currentSaldo)}
              {!sShowSaldo && <>Rp &#9679; &#9679; &#9679; &#9679;</>}
            </p>
            <span className="text-xs">
              Lihat Saldo
              <div
                onClick={handleToggleShow}
                className="cursor-pointer ml-2 inline-block"
              >
                {!sShowSaldo && <EyeIcon className="w-3 stroke-2 text-white" />}
                {sShowSaldo && (
                  <EyeSlashIcon className="w-3 stroke-2 text-white" />
                )}
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
