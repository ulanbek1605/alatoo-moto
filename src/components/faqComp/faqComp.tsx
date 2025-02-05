'use client';
import React from "react";
import "@/app/i18n"; // Убедись, что инициализация i18n происходит здесь
import dynamic from "next/dynamic";

const PaymentInfo = dynamic(() => import("@/components/FAQ/faq"), { ssr: false });



function FaqComp() {
  return (
    <div>
      <PaymentInfo />
    </div>
  );
}

export default FaqComp;
