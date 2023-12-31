import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import logo from "@/assets/images/Logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadElement>
>(({ className, ...props }, ref) => {
  const router = useRouter();

  return (
    <header
      ref={ref}
      className={cn(
        "fixed top-0 z-10 flex h-16 w-full items-center bg-white px-12 py-2 border-b border-gray-1",
        className
      )}
      {...props}
    >
      <div className="max-w-[1280px] w-full mx-auto flex justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="logo"
            width={25}
            height={25}
            className="w-[25px] h-[25px]"
          />
          <h1 className="ml-1 text-xl font-bold">SIMS PPOB</h1>
        </Link>
        <div className="flex gap-5 font-medium">
          <Link
            href="/topup"
            className={
              router.pathname === "/topup" ? "text-primary font-bold" : ""
            }
          >
            Top Up
          </Link>
          <Link
            href="/transaction"
            className={
              router.pathname === "/transaction" ? "text-primary font-bold" : ""
            }
          >
            Transaction
          </Link>
          <Link
            href="/account"
            className={
              router.pathname === "/account" ||
              router.pathname === "/account/edit"
                ? "text-primary font-bold"
                : ""
            }
          >
            Akun
          </Link>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export { Header };
