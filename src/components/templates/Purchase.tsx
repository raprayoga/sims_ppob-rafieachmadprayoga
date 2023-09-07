import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import PersonalInfo from "../modules/PersonalInfo";
import { ElectricPurchase } from "../modules/ElectricPurchase/ElectricPurchase";

export default function Purchase() {
  return (
    <DefaultLayout>
      <div className="max-w-[1280px] mx-auto mt-32 pb-20">
        <PersonalInfo className="mb-20" />
        <ElectricPurchase />
      </div>
    </DefaultLayout>
  );
}
