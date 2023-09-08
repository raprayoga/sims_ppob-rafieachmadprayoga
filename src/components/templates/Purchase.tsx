import React from "react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import PersonalInfo from "@/components/modules/PersonalInfo";
import PurchaseForm from "@/components/modules/PurchaseForm";

export default function Purchase() {
  return (
    <DefaultLayout>
      <div className="max-w-[1280px] mx-auto mt-32 pb-20">
        <PersonalInfo className="mb-10" />
        <PurchaseForm />
      </div>
    </DefaultLayout>
  );
}
