'use client'

import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './mainRental.css';

function MainRental() {
  const { t } = useTranslation();

  return (
    <div className='main_container'>
      <div className="overlay"></div>
      <div className='main'>
        <h3>
          <span>{t('mainRental.discoverNow')}</span>
        </h3>
        <h1>{t('mainRental.title')}</h1>
      </div>
      <div className='main_text'>
        {t('mainRental.introText')}
      </div>

      <div className='alatoo-moto-btn'>
        <a
          href='https://www.alatoo-moto.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='tripsBtn-main'
        >
          {t('mainRental.pressHere')}
        </a>
      </div>
    </div>
  );
}

export default MainRental;
