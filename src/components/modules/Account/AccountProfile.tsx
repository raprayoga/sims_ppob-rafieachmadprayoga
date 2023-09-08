import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { cn } from "@/utils";
import { Input, InputGroup } from "@/components/elements/InputGroup";
import Button from "@/components/elements/Button";
import Card from "@/components/elements/Card";
import { AtSymbolIcon, UserIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import profilePhoto from "@/assets/images/illustration/Profile-Photo.png";
import { useDispatch, useSelector } from "react-redux";
import { sliceState } from "@/interface/state";
import { Dispatch } from "@reduxjs/toolkit";
import { logout } from "@/store/auth";
import Dialog from "@/components/elements/Dialog";
import { useForm } from "react-hook-form";
import { profileAsync, resetUserFetch, uploadImageeAsync } from "@/store/user";
import { showToast } from "@/store/toast";

export function AccountProfile({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();
  const dispatch: Dispatch<any> = useDispatch();
  const userData = useSelector((state: sliceState) => state.user.data?.data);
  const user = useSelector((state: sliceState) => state.user);
  const { register, handleSubmit } = useForm();
  const [isShowDialog, setisShowDialog] = useState(false);
  const [src, setSrc] = useState<
    string | typeof profilePhoto | null | undefined
  >(userData?.profile_image);

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);

    dispatch(uploadImageeAsync(formData));
  };

  const handleToEdit = () => {
    router.push("/account/edit");
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  useEffect(() => {
    if (user.error) {
      dispatch(
        showToast({
          message: user.error?.message,
          type: "danger",
        })
      );
    }

    if (user.successFetch) {
      dispatch(
        showToast({
          message: "Foto profile berhasil diperbarui",
          type: "green",
        })
      );
      setisShowDialog(false);
      setSrc(userData?.profile_image);
    }

    return () => {
      dispatch(resetUserFetch());
    };
  }, [
    dispatch,
    router,
    user.error,
    user.successFetch,
    userData?.profile_image,
  ]);

  useEffect(() => {
    dispatch(profileAsync());
  }, [dispatch]);

  const handleSetShowDialog = (value: boolean) => {
    setisShowDialog(value);
  };

  return (
    <div {...props} className={cn("text-center w-1/2 mx-auto", className)}>
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="relative">
          <Image
            src={src || ""}
            alt="logo"
            width={125}
            height={125}
            className="w-[125px] h-[125px] rounded-full"
            onError={() => setSrc(profilePhoto)}
          />
          <Card
            className="absolute p-1 rounded-full right-0 bottom-0 cursor-pointer"
            onClick={() => handleSetShowDialog(true)}
          >
            <PencilIcon className="w-4 stroke-2 text-black" />
          </Card>
        </div>
        <h2 className="ml-1 text-3xl text-center font-semibold mt-5">
          {userData?.first_name + " " + userData?.last_name}
        </h2>
      </div>

      <div>
        <InputGroup className="w-full">
          <AtSymbolIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Input
            name="email"
            className="pl-6"
            value={userData?.email}
            readOnly
          />
        </InputGroup>

        <InputGroup className="w-full mt-8">
          <UserIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Input
            name="first_name"
            placeholder="nama depan"
            className="pl-6"
            value={userData?.first_name}
            readOnly
          />
        </InputGroup>

        <InputGroup className="w- mt-8">
          <UserIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Input
            name="last_name"
            placeholder="nama belakang"
            className="pl-6"
            value={userData?.last_name}
            readOnly
          />
        </InputGroup>

        <Button theme="primary" className="w-full mt-8" onClick={handleToEdit}>
          Edit Profile
        </Button>

        <Button
          theme="primary"
          variant="ghost"
          className="w-full mt-8"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>

      <Dialog
        isShow={isShowDialog}
        className="flex flex-col items-center w-[400px]"
        onClose={() => handleSetShowDialog(false)}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="file" {...register("file")} />

          <Button
            theme="primary"
            className="w-full mt-8"
            isLoading={user.loading}
          >
            Upload
          </Button>
        </form>
      </Dialog>
    </div>
  );
}
