import React, { useState, useEffect } from "react";
import { cn } from "@/utils";
import { Input, InputGroup } from "@/components/elements/InputGroup";
import {
  CheckIcon,
  CreditCardIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Button from "@/components/elements/Button";
import Card from "@/components/elements/Card";
import Dialog from "@/components/elements/Dialog";
import Image from "next/image";
import logo from "@/assets/images/Logo.png";
import Link from "next/link";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { formRules, getVariant } from "@/utils/form-rules";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { resetTopup, topupAsync } from "@/store/topup";
import { sliceState } from "@/interface/state";
import { balanceAsync } from "@/store/balance";

export function TopupForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const dispatch: Dispatch<any> = useDispatch();
  const topup = useSelector((state: sliceState) => state.topup);
  const [isShowDialog, setIsShowDialog] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const listPrice: number[] = [10000, 20000, 50000, 100000, 250000, 500000];

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<{ top_up_amount: number }>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<{ top_up_amount: number }> = () => {
    setIsShowDialog([true, false, false]);
  };

  const submitConfirmed = () => {
    handleHideDialog();
    dispatch(topupAsync({ top_up_amount: watch("top_up_amount") }));
  };

  const handleChooseNominal = (nominal: number) => {
    reset({
      top_up_amount: nominal,
    });
  };

  const handleHideDialog = () => {
    setIsShowDialog([false, false, false]);
  };

  useEffect(() => {
    if (topup.data) {
      setIsShowDialog([false, false, true]);
      dispatch(balanceAsync());
    }

    if (topup.error) {
      setIsShowDialog([false, true, false]);
    }

    return () => {
      dispatch(resetTopup());
    };
  }, [dispatch, topup.data, topup.error]);

  return (
    <div {...props} className={cn("flex gap-5", className)}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-8/12">
        <Controller
          control={control}
          rules={{ required: formRules.required, min: formRules.minNominal(0) }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <>
              <InputGroup className="w-full">
                <CreditCardIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  type="number"
                  placeholder="masukan nominal Top Up"
                  className="pl-6"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>
              <span className="text-[10px] text-primary float-right">
                {errors.top_up_amount ? errors.top_up_amount.message : ""}
              </span>
            </>
          )}
          name="top_up_amount"
        />
        <Button
          theme="primary"
          className={`w-full mt-5`}
          disabled={!!!watch("top_up_amount") || !!errors.top_up_amount}
          isDisabled={!!!watch("top_up_amount") || !!errors.top_up_amount}
          isLoading={topup.loading}
        >
          Topup
        </Button>
      </form>

      <div className="w-4/12 flex flex-wrap gap-3">
        {listPrice.map((price) => (
          <Card
            key={price}
            className="cursor-pointer flex-shrink-0 text-xs rounded py-2.5 w-20 text-center"
            theme={watch("top_up_amount") === price ? "green" : "white"}
            onClick={() => handleChooseNominal(price)}
          >
            Rp{new Intl.NumberFormat("id-ID").format(+price)}
          </Card>
        ))}
      </div>
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
        <p className="text-sm">Anda yakin untuk Top Up sebesar</p>
        <p className="font-bold text-xl">
          Rp{new Intl.NumberFormat("id-ID").format(+watch("top_up_amount"))}?
        </p>
        <p
          className="text-sm font-bold text-primary my-6 cursor-pointer"
          onClick={submitConfirmed}
        >
          Ya, Lanjutkan Top Up
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
        <p className="text-sm">Top Up sebesar</p>
        <p className="font-bold text-xl">
          Rp{new Intl.NumberFormat("id-ID").format(+watch("top_up_amount"))}?
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
        <p className="text-sm">Top Up sebesar</p>
        <p className="font-bold text-xl">
          Rp{new Intl.NumberFormat("id-ID").format(+watch("top_up_amount"))}?
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
