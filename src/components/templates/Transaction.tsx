import React from "react";
import TransactionHistory from "../modules/TransactionHistory";
import WithProfileLayout from "../layouts/WithProfileLayout";

export default function Transaction() {
  return (
    <WithProfileLayout>
      <TransactionHistory />
    </WithProfileLayout>
  );
}
