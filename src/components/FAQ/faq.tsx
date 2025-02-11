'use client';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Main from '../section_main/Main';
import './faq.css';
import '../../app/i18n';

const PaymentInfo = () => {
  const { t, ready } = useTranslation();

  if (!ready) return <div>Loading translations...</div>; // Добавляем заглушку
  return (
    <div>
      {/* <Main /> */}

      <div className="payment_container">
        <h2>{t('shipping.title')}</h2>
        <p>{t('shipping.content')}</p>

        <h2>{t('recommendations.title')}</h2>
        <p>{t('recommendations.content')}</p>

        <h2>{t('skills.title')}</h2>
        <p>{t('skills.content')}</p>

        <h2>{t('police.title')}</h2>
        <p>{t('police.content')}</p>

        <h2>{t('flights.title')}</h2>
        <p>{t('flights.content')}</p>

        <h2>{t('best_time.title')}</h2>
        <p>{t('best_time.content')}</p>

        <h2>{t('border.title')}</h2>
        <p>{t('border.content')}</p>

        <h2>{t('tajik_crossings.title')}</h2>
        <p>{t('tajik_crossings.content')}</p>

        <h2>{t('safety.title')}</h2>
        <p>{t('safety.content')}</p>

        <h2>{t('bike_equipment.title')}</h2>
        <p>{t('bike_equipment.content')}</p>

        <h2>{t('currency_payment.title')}</h2>
        <p>{t('currency_payment.content')}</p>

        <h2>{t('currency.title')}</h2>
        <p>{t('currency.content')}</p>

        <h2>{t('apps.title')}</h2>
        <p>{t('apps.content')}</p>

        <h2>{t('gps.title')}</h2>
        <p>{t('gps.content')}</p>

        <h2>{t('tour.title')}</h2>
        <p>{t('tour.content')}</p>

        <h2>{t('cyclists.title')}</h2>
        <p>{t('cyclists.content')}</p>
      </div>
    </div>
  );
};

export default PaymentInfo;
