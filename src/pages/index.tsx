import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button className="bg-red w-[200px] px-5 py-2 text-white border-gray-1 rounded-full">
        Button
      </button>
    </main>
  );
}
