import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Input, InputGroup } from "@/components/elements/InputGroup";
import Button from "@/components/elements/Button";
import Dialog from "@/components/elements/Dialog";
import {
  CheckIcon,
  CreditCardIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "@/assets/images/Logo.png";
import { useRouter } from "next/router";
import { Service } from "@/interface/services";
import { useDispatch, useSelector } from "react-redux";
import { sliceState } from "@/interface/state";
import Link from "next/link";
import { Dispatch } from "@reduxjs/toolkit";
import { purchaseAsync, resetPurchase } from "@/store/purchase";
import { servicesAsync } from "@/store/services";
import { balanceAsync } from "@/store/balance";

export function PurchaseForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();
  const dispatch: Dispatch<any> = useDispatch();
  const services = useSelector((state: sliceState) => state.services.data);
  const purchase = useSelector((state: sliceState) => state.purchase);
  const [isShowDialog, setIsShowDialog] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const serviceCode = router.query.servicecode;
  const service: Service = services.filter(
    (service: { service_code: string | string[] | undefined }) =>
      service.service_code === serviceCode
  )[0];

  const handleHideDialog = () => {
    setIsShowDialog([false, false, false]);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setIsShowDialog([true, false, false]);
  };

  const submitConfirmed = () => {
    handleHideDialog();
    dispatch(purchaseAsync({ service_code: service?.service_code }));
  };

  useEffect(() => {
    dispatch(servicesAsync());

    return () => {
      dispatch(resetPurchase());
    };
  }, []);

  useEffect(() => {
    if (purchase.data) {
      setIsShowDialog([false, false, true]);
      dispatch(balanceAsync());
    }

    if (purchase.error) {
      setIsShowDialog([false, true, false]);
    }
  }, [dispatch, purchase.data, purchase.error]);

  return (
    <div {...props}>
      <h4 className="text-xl mb-2">Pembayaran</h4>
      <div className="mb-10 flex">
        <Image
          src={service?.service_icon || ""}
          alt="electric product"
          className="w-[25px] h-[25px]"
          width={25}
          height={25}
        />
        <p className="text-lg leading-none font-semibold ml-3">
          {service?.service_name}
        </p>
      </div>

      <form className="w-full" onSubmit={handleSubmit}>
        <InputGroup className="w-full">
          <CreditCardIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Input
            type="number"
            name="purchase"
            className="pl-6"
            value={service?.service_tariff}
            readOnly
          />
        </InputGroup>

        <Button
          theme="primary"
          className={`w-full mt-5`}
          isLoading={purchase.loading}
        >
          Bayar
        </Button>
      </form>

      <Dialog
        isShow={isShowDialog[0]}
        className="flex flex-col items-center w-[280px]"
        onClose={handleHideDialog}
      >
        <Image
          src={logo}
          alt="sims logo"
          width={50}
          height={50}
          className="mb-5"
        />
        <p className="text-sm">Beli {service?.service_name} senilai</p>
        <p className="font-bold text-xl">
          Rp{new Intl.NumberFormat("id-ID").format(service?.service_tariff)}?
        </p>
        <p
          className="text-sm font-bold text-primary my-6 cursor-pointer"
          onClick={submitConfirmed}
        >
          Ya, Lanjutkan Bayar
        </p>
        <p
          className="text-sm text-gray cursor-pointer"
          onClick={handleHideDialog}
        >
          Batalkan
        </p>
      </Dialog>
      <Dialog
        isShow={isShowDialog[1]}
        className="flex flex-col items-center w-[280px]"
        onClose={handleHideDialog}
      >
        <div className="w-[50px] h-[50px] bg-primary flex justify-center items-center rounded-full mb-5">
          <XMarkIcon className="w-[30px] stroke-2 text-white" />
        </div>
        <p className="text-sm">Pembayaran {service?.service_name} senilai</p>
        <p className="font-bold text-xl">
          Rp{new Intl.NumberFormat("id-ID").format(service?.service_tariff)}?
        </p>
        <p className="text-sm mt-2 mb-4" onClick={() => {}}>
          gagal
        </p>
        <Link
          className="text-sm text-primary font-bold cursor-pointer"
          href="/"
        >
          Kembali ke Beranda
        </Link>
      </Dialog>
      <Dialog
        isShow={isShowDialog[2]}
        className="flex flex-col items-center w-[280px]"
        onClose={handleHideDialog}
      >
        <div className="w-[50px] h-[50px] bg-green flex justify-center items-center rounded-full mb-5">
          <CheckIcon className="w-[30px] stroke-2 text-white" />
        </div>
        <p className="text-sm">Pembayaran {service?.service_name} senilai</p>
        <p className="font-bold text-xl">
          Rp{new Intl.NumberFormat("id-ID").format(service?.service_tariff)}?
        </p>
        <p className="text-sm mt-2 mb-4" onClick={() => {}}>
          berhasil
        </p>
        <Link
          className="text-sm text-primary font-bold cursor-pointer"
          href="/"
        >
          Kembali ke Beranda
        </Link>
      </Dialog>
    </div>
  );
}
