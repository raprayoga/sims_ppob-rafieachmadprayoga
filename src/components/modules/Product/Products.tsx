import React from "react";
import Image from "next/image";
import { cn } from "@/utils";

import pbb from "@/assets/images/products/PBB.png";
import listrik from "@/assets/images/products/Listrik.png";
import pulsa from "@/assets/images/products/Pulsa.png";
import pdam from "@/assets/images/products/PDAM.png";
import pgn from "@/assets/images/products/PGN.png";
import televisi from "@/assets/images/products/Televisi.png";
import musik from "@/assets/images/products/Musik.png";
import game from "@/assets/images/products/Game.png";
import makanan from "@/assets/images/products/Voucher-Makanan.png";
import kurban from "@/assets/images/products/Kurban.png";
import zakat from "@/assets/images/products/Zakat.png";
import data from "@/assets/images/products/Paket-Data.png";

const imageList = [
  { src: pbb, text: "pbb" },
  { src: listrik, text: "Listrik" },
  { src: pulsa, text: "Pulsa" },
  { src: pdam, text: "PDAM" },
  { src: pgn, text: "PGN" },
  { src: televisi, text: "TV Langganan" },
  { src: musik, text: "Musik" },
  { src: game, text: "Voucher Game" },
  { src: makanan, text: "Voucher Makanan" },
  { src: kurban, text: "Kurban" },
  { src: zakat, text: "Zakat" },
  { src: data, text: "Paket Data" },
];

export function Products({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex gap-5 justify-between overflow-x-auto overflow-y-hidden py-2",
        className
      )}
    >
      {imageList.map((image) => (
        <div key={image.text} className="text-center min-w-[70px] max-w-[70px]">
          <Image
            src={image.src}
            alt={image.text}
            className="mb-2 w-[70px] h-[70px]"
            width={70}
            height={70}
          />
          <p className="text-xs leading-none">{image.text}</p>
        </div>
      ))}
    </div>
  );
}
