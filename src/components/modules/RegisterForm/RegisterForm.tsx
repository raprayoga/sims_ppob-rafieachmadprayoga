import React, { useState } from "react";
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

export function RegisterForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowPassKonf, setIsShowPassKonf] = useState(false);

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

      <form action="">
        <InputGroup className="w-full">
          <AtSymbolIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Input
            type="email"
            name="email"
            placeholder="masukan email anda"
            className="pl-6"
          />
        </InputGroup>

        <InputGroup className="w-full mt-8">
          <UserIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Input name="first_name" placeholder="nama depan" className="pl-6" />
        </InputGroup>

        <InputGroup className="w- mt-8">
          <UserIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Input
            name="last_name"
            placeholder="nama belakang"
            className="pl-6"
          />
        </InputGroup>

        <InputGroup className="w-full mt-8">
          <LockClosedIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Input
            name="last_name"
            type={isShowPass ? "text" : "password"}
            placeholder="buat password"
            className="px-6"
          />
          <div
            onClick={handleToggleShowPass}
            className="absolute right-2 left-auto cursor-pointer"
          >
            {!isShowPass && <EyeIcon className="w-3 stroke-2 text-gray" />}
            {isShowPass && <EyeSlashIcon className="w-3 stroke-2 text-gray" />}
          </div>
        </InputGroup>

        <InputGroup className="w-full mt-8">
          <LockClosedIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Input
            type={isShowPassKonf ? "text" : "password"}
            placeholder="konfirmasi password"
            className="px-6"
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

        <Button theme="primary" className="w-full mt-8">
          Registrasi
        </Button>
      </form>

      <div className="mt-5">
        <span className="text-xs ">
          sudah punya akun? login{" "}
          <Link href="/login" className="text-primary">
            di sini
          </Link>
        </span>
      </div>
    </div>
  );
}
