import React, { useEffect, useState } from "react";
import { cn } from "@/utils";
import { Input, InputGroup } from "@/components/elements/InputGroup";
import Button from "@/components/elements/Button";
import Image from "next/image";
import { AtSymbolIcon, UserIcon } from "@heroicons/react/24/outline";
import profilePhoto from "@/assets/images/illustration/Profile-Photo.png";
import { useDispatch, useSelector } from "react-redux";
import { sliceState } from "@/interface/state";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { UserEditInputForm } from "@/interface/user";
import { formRules, getVariant } from "@/utils/form-rules";
import { Dispatch } from "@reduxjs/toolkit";
import { editProfileAsync, resetUserFetch } from "@/store/user";
import { showToast } from "@/store/toast";
import { useRouter } from "next/router";

export function AccountEditProfile({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();
  const dispatch: Dispatch<any> = useDispatch();
  const userData = useSelector((state: sliceState) => state.user.data?.data);
  const user = useSelector((state: sliceState) => state.user);
  const [src, setSrc] = useState<
    string | typeof profilePhoto | null | undefined
  >(userData?.profile_image);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserEditInputForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<UserEditInputForm> = (data) => {
    dispatch(editProfileAsync(data));
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
          message: "Profile Berhasil diperbarui",
          type: "green",
        })
      );

      router.push("/account");
    }

    return () => {
      dispatch(resetUserFetch());
    };
  }, [dispatch, router, user.error, user.successFetch]);

  return (
    <div {...props} className={cn("text-center w-1/2 mx-auto", className)}>
      <div className="flex flex-col items-center justify-center mb-16">
        <Image
          src={src || ""}
          alt="logo"
          width={125}
          height={125}
          className="w-[125px] h-[125px]"
          onError={() => setSrc(profilePhoto)}
        />
        <h2 className="ml-1 text-3xl text-center font-semibold mt-5">
          {userData?.first_name + " " + userData?.last_name}
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup className="w-full">
          <AtSymbolIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Input
            name="email"
            className="pl-6"
            value={userData?.email}
            readOnly
          />
        </InputGroup>

        <Controller
          control={control}
          rules={{ required: formRules.required }}
          defaultValue={userData?.first_name}
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
          defaultValue={userData?.last_name}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <>
              <InputGroup className="w- mt-8">
                <UserIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
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

        <Button
          theme="primary"
          className="w-full mt-8"
          isLoading={user.loading}
        >
          Simpan
        </Button>
      </form>
    </div>
  );
}
