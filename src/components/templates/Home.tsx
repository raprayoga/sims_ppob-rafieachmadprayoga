import React from "react";
import Banners from "../modules/Banners";
import DefaultLayout from "../layouts/DefaultLayout";
import Products from "../modules/Product";
import PersonalInfo from "../modules/PersonalInfo";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="max-w-[1280px] mx-auto mt-32 pb-20">
        <PersonalInfo className="mb-20" />
        <Products className="mb-20" />
        <Banners />
      </div>
    </DefaultLayout>
  );
}
