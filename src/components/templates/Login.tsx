import React from "react";
import Image from "next/image";
import illustrasiLogin from "@/assets/illustration/Illustrasi-Login.png";
import { LoginForm } from "../modules/LoginForm/LoginForm";

export default function Login() {
  return (
    <div className="p-0 m-0 flex justify-between h-screen w-screen">
      <div className="w-1/2 flex items-center justify-center">
        <LoginForm className="max-w-[500px]" />
      </div>
      <Image src={illustrasiLogin} alt="illustration" className="w-1/2" />
    </div>
  );
}
