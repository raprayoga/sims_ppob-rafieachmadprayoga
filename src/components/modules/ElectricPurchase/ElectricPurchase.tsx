import React, { useState } from "react";
import Image from "next/image";
import { Input, InputGroup } from "@/components/elements/InputGroup";
import Button from "@/components/elements/Button";
import Dialog from "@/components/elements/Dialog";
import Toast from "@/components/elements/Toast";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import logo from "@/assets/images/Logo.png";
import listrik from "@/assets/images/products/Listrik.png";

export function ElectricPurchase({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [nominal, setNominal] = useState<string>("");
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);

  const handleShowDialog = (value: boolean) => {
    setIsShowDialog(value);
  };

  return (
    <div {...props}>
      <h4 className="text-xl mb-2">Pembayaran</h4>
      <div className="mb-10 flex">
        <Image
          src={listrik}
          alt="electric product"
          className="w-[25px] h-[25px]"
          width={25}
          height={25}
        />
        <p className="text-lg leading-none font-semibold ml-3">
          Listrik Prabayar
        </p>
      </div>

      <form action="" className="w-full">
        <InputGroup className="w-full">
          <CreditCardIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Input
            type="number"
            name="topup"
            className="pl-6"
            value={nominal}
            readOnly
          />
        </InputGroup>

        <Button theme="primary" className={`w-full mt-5`}>
          Bayar
        </Button>
      </form>

      <Dialog isShow={isShowDialog} className="flex flex-col items-center">
        <Image
          src={logo}
          alt="sims logo"
          width={50}
          height={50}
          className="mb-5"
        />
        <p className="text-sm">Anda yakin untuk Top Up sebesar</p>
        <p className="font-bold text-xl">
          Rp{new Intl.NumberFormat("id-ID").format(+nominal)}?
        </p>
        <p
          className="text-sm font-bold text-primary my-6 cursor-pointer"
          onClick={() => {}}
        >
          Ya, Lanjutkan Top Up
        </p>
        <p
          className="text-sm text-gray cursor-pointer"
          onClick={() => handleShowDialog(false)}
        >
          Batalkan
        </p>
      </Dialog>

      <Toast isShow={true}>
        Topup Sebesar Rp{new Intl.NumberFormat("id-ID").format(+nominal)} Gagal
      </Toast>

      <Toast isShow={true} theme="green">
        Topup Sebesar Rp{new Intl.NumberFormat("id-ID").format(+nominal)}{" "}
        Berhasil
      </Toast>
    </div>
  );
}
