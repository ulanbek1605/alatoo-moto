'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import './trips.css';
import '../../app/i18n'

function Trips() {
  const { t } = useTranslation();

  const trips = [
    {
      id: 1,
      title: t('trips.customized_tour.title'),
      address: t('trips.customized_tour.address'),
      photo: '/image/gallery2.jpeg',
      data: null,
      link: 'https://www.alatoo-moto.com/'
    },
    {
      id: 2,
      title: t('trips.rent_motorcycle.title'),
      address: t('trips.rent_motorcycle.address'),
      photo: '/image/trips11.jpg',
      data: null,
      link: 'mailto:shahruh@alatoo-moto.com'
    },
    {
      id: 3,
      title: t('trips.service_repair.title'),
      address: t('trips.service_repair.address'),
      photo: '/image/gallery41.jpeg',
      data: null,
      link: 'mailto:shahruh@alatoo-moto.com'
    },
    {
      id: 4,
      title: t('trips.customized_tour_group.title'),
      address: t('trips.customized_tour_group.address'),
      photo: '/image/trips1.jpeg',
      data: null,
      link: 'mailto:shahruh@alatoo-moto.com'
    },
    {
      id: 5,
      title: t('trips.oil_tires.title'),
      address: t('trips.oil_tires.address'),
      photo: '/image/shiny.jpg',
      data: null,
      link: 'mailto:shahruh@alatoo-moto.com'
    },
    {
      id: 6,
      title: t('trips.support_rentals.title'),
      address: t('trips.support_rentals.address'),
      photo: '/image/2222.jpg',
      data: null,
      link: 'mailto:shahruh@alatoo-moto.com'
    },
  ];

  return (
    <div className='tripsContainer'>
      <h2>{t('trips.title')}</h2>
      <div className='tripsBlock'>
        {trips.map((item) => (
          <div key={item.id} className='tripsCard'>
            <div className='tripsImage'>
              <Image
                src={item.photo}
                width={300}
                height={200}
                alt={item.title}
                className='tripsImg'
              />
            </div>
            <div className='tripsContent'>
              <h3 className='tripsTitle'>{item.title}</h3>
              <p className='tripsAddress'>{item.address}</p>
              {item.data && <p className='tripsDate'>{item.data}</p>}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className='tripsBtn'
              >
                {t('trips.learn_more')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trips;
