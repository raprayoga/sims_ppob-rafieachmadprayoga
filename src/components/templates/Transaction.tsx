import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import PersonalInfo from "../modules/PersonalInfo";
import TransactionHistory from "../modules/TransactionHistory";

export default function Transaction() {
  return (
    <DefaultLayout>
      <div className="max-w-[1280px] mx-auto mt-32 pb-20">
        <PersonalInfo className="mb-10" />
        <TransactionHistory />
      </div>
    </DefaultLayout>
  );
}
