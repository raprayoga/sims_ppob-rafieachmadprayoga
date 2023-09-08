import React from "react";
import TopupForm from "../modules/TopupForm";
import WithProfileLayout from "../layouts/WithProfileLayout";

export default function Topup() {
  return (
    <WithProfileLayout>
      <TopupForm />
    </WithProfileLayout>
  );
}
