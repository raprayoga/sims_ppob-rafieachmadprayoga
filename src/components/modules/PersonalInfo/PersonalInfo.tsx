import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/utils";
import bgSaldo from "@/assets/images/Background-Saldo.png";
import profilePhoto from "@/assets/images/illustration/Profile-Photo.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { sliceState } from "@/interface/state";
import { profileAsync, reset } from "@/store/user";
import { useRouter } from "next/router";
import { showToast } from "@/store/toast";
import { balanceAsync } from "@/store/balance";

export function PersonalInfo({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();
  const dispatch: Dispatch<any> = useDispatch();
  const userError = useSelector((state: sliceState) => state.user.error);
  const userData = useSelector((state: sliceState) => state.user.data?.data);
  const balance = useSelector((state: sliceState) => state.balance?.balance);
  const [sShowSaldo, setIsShowSaldo] = useState(false);

  const handleToggleShow = () => {
    setIsShowSaldo((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    if (userError && userError.status === 108) {
      dispatch(
        showToast({
          message: userError?.message,
          type: "danger",
        })
      );
      dispatch(reset());
      router.push("/login");
    }
  }, [dispatch, router, userError]);

  useEffect(() => {
    dispatch(profileAsync());
    dispatch(balanceAsync());
  }, [dispatch]);

  return (
    <div {...props} className={cn("flex justify-between", className)}>
      <div className="w-1/2">
        <Image
          src={userData?.profile_image || profilePhoto}
          alt="profile photo"
          width={70}
          height={70}
          className="w-[70px] h-[70px]"
        />
        <p className="text-lg mt-2">Selamat datang,</p>
        <h4 className="text-4xl font-semibold">
          {userData?.first_name + " " + userData?.last_name}
        </h4>
      </div>
      <div className="w-1/2">
        <div className="relative">
          <Image src={bgSaldo} alt="background saldo" />
          <div className="absolute text-white top-0 bottom-0 p-3 flex flex-col justify-between">
            <p>Saldo anda</p>
            <p className="text-3xl">
              Rp {sShowSaldo && new Intl.NumberFormat("id-ID").format(balance)}
              {!sShowSaldo && <>&#9679; &#9679; &#9679; &#9679;</>}
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
