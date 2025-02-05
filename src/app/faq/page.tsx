// 'use client'
// import React from 'react';
// // import { useEffect } from 'react';
// import PaymentInfo from '@/components/FAQ/faq';
// import '../i18n'
// export default function faq() {
//   // useEffect(() => {
//   //   import('../i18n'); // Ensure i18n is initialized
//   // }, []);

//   return (
//     <div>
//       <PaymentInfo />
//     </div>
//   );
// }


import React from 'react'
import FaqComp from '@/components/faqComp/faqComp'

function faq() {
  return (
    <div>
      <FaqComp/>
    </div>
  )
}

export default faq

