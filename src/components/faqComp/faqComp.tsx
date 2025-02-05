'use client';

import React, { Suspense } from "react";
import PaymentInfo from "../FAQ/faq";
import "../../app/i18n"; // Убедись, что инициализация i18n происходит здесь




function FaqComp() {
  return (
    <div>
      {/* Используем Suspense для асинхронных переводов */}
      <Suspense fallback={<div>Loading...</div>}>
        <PaymentInfo />
      </Suspense>
    </div>
  );
}

export default FaqComp;
