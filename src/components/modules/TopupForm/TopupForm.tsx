import React, { useState } from "react";
import { cn } from "@/utils";
import { Input, InputGroup } from "@/components/elements/InputGroup";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import Button from "@/components/elements/Button";
import Card from "@/components/elements/Card";
import Dialog from "@/components/elements/Dialog";
import Image from "next/image";
import logo from "@/assets/images/Logo.png";
import Toast from "@/components/elements/Toast";

export function TopupForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [nominal, setNominal] = useState<string>("");
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);
  const listPrice: string[] = [
    "10000",
    "20000",
    "50000",
    "100000",
    "250000",
    "500000",
  ];

  const handleChooseNominal = (nominal: string) => {
    setNominal(nominal);
  };

  const handleShowDialog = (value: boolean) => {
    setIsShowDialog(value);
  };

  return (
    <div {...props} className={cn("flex gap-5", className)}>
      <form action="" className="w-8/12">
        <InputGroup className="w-full">
          <CreditCardIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Input
            type="number"
            name="topup"
            placeholder="masukan nominal Top Up"
            className="pl-6"
            value={nominal}
          />
        </InputGroup>

        <Button
          theme="primary"
          className={`w-full mt-5`}
          disabled={!!!nominal}
          isDisabled={!!!nominal}
        >
          Topup
        </Button>
      </form>

      <div className="w-4/12 flex flex-wrap gap-3">
        {listPrice.map((price) => (
          <Card
            key={price}
            className="cursor-pointer flex-shrink-0 text-xs rounded py-2.5 w-20 text-center"
            onClick={() => handleChooseNominal(price)}
          >
            Rp{new Intl.NumberFormat("id-ID").format(+price)}
          </Card>
        ))}
      </div>

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
