import React from "react";
import Banners from "../modules/Banners";
import Products from "../modules/Product";
import WithProfileLayout from "../layouts/WithProfileLayout";

export default function Home() {
  return (
    <WithProfileLayout>
      <Products className="mb-20" />
      <Banners />
    </WithProfileLayout>
  );
}
