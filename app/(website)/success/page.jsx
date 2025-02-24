import OrderSuccess from "@/components/website/OrderSuccess";
import React, { Suspense } from "react";

const SuccessPage = () => {
  return (
    <Suspense>
      <OrderSuccess />
    </Suspense>
  );
};

export default SuccessPage;
