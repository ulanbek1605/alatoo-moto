'use client';
import React from "react";
import "@/app/i18n"; // Убедись, что инициализация i18n происходит здесь
import dynamic from "next/dynamic";
import Main from "../section_main/Main";
const PaymentInfo = dynamic(() => import("@/components/FAQ/faq"), { ssr: false });



function FaqComp() {
  return (
    <div>
      <Main/>
      <PaymentInfo />
    </div>
  );
}

export default FaqComp;
