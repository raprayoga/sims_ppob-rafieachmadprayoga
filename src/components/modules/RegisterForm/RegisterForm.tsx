import React, { useState, useEffect } from "react";
import { cn } from "@/utils";
import { Input, InputGroup } from "@/components/elements/InputGroup";
import {
  AtSymbolIcon,
  UserIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Button from "@/components/elements/Button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/Logo.png";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { formRules, getVariant } from "@/utils/form-rules";
import { RegistInputForm } from "@/interface/auth";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { registAsync } from "@/store/regist";
import { sliceState } from "@/interface/state";
import { showToast } from "@/store/toast";

export function RegisterForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const dispatch: Dispatch<any> = useDispatch();
  const regist = useSelector((state: sliceState) => state.regist);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowPassKonf, setIsShowPassKonf] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<RegistInputForm>({
    mode: "onChange",
  });

  useEffect(() => {
    if (regist.error) {
      dispatch(
        showToast({
          message: regist.error?.message,
          type: "danger",
        })
      );
    }
    if (regist.data) {
      dispatch(
        showToast({
          message: regist.data?.message,
          type: "green",
        })
      );
      reset();
    }
  }, [dispatch, regist.error, regist.data, reset]);

  const handleToggleShowPass = () => {
    setIsShowPass((prevState) => {
      return !prevState;
    });
  };
  const handleToggleShowPassKonf = () => {
    setIsShowPassKonf((prevState) => {
      return !prevState;
    });
  };

  const onSubmit: SubmitHandler<RegistInputForm> = (data) => {
    dispatch(registAsync(data));
  };

  return (
    <div {...props} className={cn("text-center", className)}>
      <div className="flex items-center justify-center">
        <Image
          src={logo}
          alt="logo"
          width={25}
          height={25}
          className="w-[25px] h-[25px]"
        />
        <h2 className="ml-1 text-xl text-center font-semibold">SIMS PPOB</h2>
      </div>

      <div className="flex justify-center">
        <h3 className="w-4/5 text-3xl my-10 font-semibold">
          Lengkapi data untuk membuat akun
        </h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          rules={{ required: formRules.required, pattern: formRules.email }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <>
              <InputGroup className="w-full">
                <AtSymbolIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  type="email"
                  placeholder="masukan email anda"
                  className="pl-6"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>
              <span className="text-[10px] text-primary float-right">
                {errors.email ? errors.email.message : ""}
              </span>
            </>
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{ required: formRules.required }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <>
              <InputGroup className="w-full mt-8">
                <UserIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  placeholder="nama depan"
                  className="pl-6"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>

              <span className="text-[10px] text-primary float-right">
                {errors.first_name ? errors.first_name.message : ""}
              </span>
            </>
          )}
          name="first_name"
        />

        <Controller
          control={control}
          rules={{ required: formRules.required }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <>
              <InputGroup className="w- mt-8">
                <UserIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  name="last_name"
                  placeholder="nama belakang"
                  className="pl-6"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>

              <span className="text-[10px] text-primary float-right">
                {errors.last_name ? errors.last_name.message : ""}
              </span>
            </>
          )}
          name="last_name"
        />

        <Controller
          control={control}
          rules={{ required: formRules.required }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <>
              <InputGroup className="w-full mt-8">
                <LockClosedIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  type={isShowPass ? "text" : "password"}
                  placeholder="buat password"
                  className="px-6"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
                <div
                  onClick={handleToggleShowPass}
                  className="absolute right-2 left-auto cursor-pointer"
                >
                  {!isShowPass && (
                    <EyeIcon className="w-3 stroke-2 text-gray" />
                  )}
                  {isShowPass && (
                    <EyeSlashIcon className="w-3 stroke-2 text-gray" />
                  )}
                </div>
              </InputGroup>

              <span className="text-[10px] text-primary float-right">
                {errors.password ? errors.password.message : ""}
              </span>
            </>
          )}
          name="password"
        />

        <Controller
          control={control}
          rules={{
            required: formRules.required,
            validate: (value) =>
              value === watch("password") || "password  tidak sama",
          }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <>
              <InputGroup className="w-full mt-8">
                <LockClosedIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  type={isShowPassKonf ? "text" : "password"}
                  placeholder="konfirmasi password"
                  className="px-6"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />

                <div
                  onClick={handleToggleShowPassKonf}
                  className="absolute right-2 left-auto cursor-pointer"
                >
                  {!isShowPassKonf && (
                    <EyeIcon className="w-3 stroke-2 text-gray cursor-pointer" />
                  )}
                  {isShowPassKonf && (
                    <EyeSlashIcon className="w-3 stroke-2 text-gray cursor-pointer" />
                  )}
                </div>
              </InputGroup>

              <span className="text-[10px] text-primary float-right">
                {errors.password_konfirm ? errors.password_konfirm.message : ""}
              </span>
            </>
          )}
          name="password_konfirm"
        />

        <Button
          type="submit"
          isLoading={regist.loading}
          theme="primary"
          className="w-full mt-8"
        >
          Registrasi
        </Button>
      </form>

      <div className="mt-5">
        <span className="text-xs ">
          sudah punya akun? login{" "}
          <Link href="/login" className="text-primary font-bold">
            di sini
          </Link>
        </span>
      </div>
    </div>
  );
}
