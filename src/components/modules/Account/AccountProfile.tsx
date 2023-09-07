import React from "react";
import { cn } from "@/utils";
import { Input, InputGroup } from "@/components/elements/InputGroup";
import { AtSymbolIcon, UserIcon } from "@heroicons/react/24/outline";
import Button from "@/components/elements/Button";
import Image from "next/image";
import profilePhoto from "@/assets/images/illustration/Profile-Photo.png";

export function AccountProfile({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const profile = {
    email: "wallet@nutech.com",
    first_name: "Kristanto",
    last_name: "Wibowo",
  };

  return (
    <div {...props} className={cn("text-center w-1/2 mx-auto", className)}>
      <div className="flex flex-col items-center justify-center mb-16">
        <Image
          src={profilePhoto}
          alt="logo"
          width={100}
          height={100}
          className="w-[100px] h-[100px]"
        />
        <h2 className="ml-1 text-3xl text-center font-semibold mt-5">
          {profile.first_name + " " + profile.last_name}
        </h2>
      </div>

      <div>
        <InputGroup className="w-full">
          <AtSymbolIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Input name="email" className="pl-6" value={profile.email} readOnly />
        </InputGroup>

        <InputGroup className="w-full mt-8">
          <UserIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Input
            name="first_name"
            placeholder="nama depan"
            className="pl-6"
            value={profile.first_name}
            readOnly
          />
        </InputGroup>

        <InputGroup className="w- mt-8">
          <UserIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Input
            name="last_name"
            placeholder="nama belakang"
            className="pl-6"
            value={profile.last_name}
            readOnly
          />
        </InputGroup>

        <Button theme="primary" className="w-full mt-8">
          Edit Profile
        </Button>

        <Button theme="primary" variant="ghost" className="w-full mt-8">
          Logout
        </Button>
      </div>
    </div>
  );
}
