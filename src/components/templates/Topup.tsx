import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import PersonalInfo from "../modules/PersonalInfo";
import TopupForm from "../modules/TopupForm";

export default function Topup() {
  return (
    <DefaultLayout>
      <div className="max-w-[1280px] mx-auto mt-32 pb-20">
        <PersonalInfo className="mb-20" />
        <TopupForm />
      </div>
    </DefaultLayout>
  );
}
