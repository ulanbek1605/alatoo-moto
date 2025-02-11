'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from "react-i18next";
import '../../../app/i18n'
import './rental.css';

let photo1 = [
  { id: 1, photo: '/image/car1.jpg' },
  { id: 2, photo: '/image/1.jpg' },
  { id: 3, photo: '/image/6.jpg' },
  { id: 4, photo: '/image/gallery1.jpg' },
];

function Rental() {
  const { t } = useTranslation();

  // const cars = t('rental.cars', { returnObjects: true });

  const cars = [
    {
      id: 1,
      name: t('rental.cars_name'),
      month: t('rental.cars_month'),
      cost1: t('rental.cars_cost1'),
      cost2: t('rental.cars_cost2')
    },
    {
      id: 2,
      name: t('rental.cars_name'),
      month: t('rental.cars_month'),
      cost1: t('rental.cars_cost1'),
      cost2: t('rental.cars_cost2')
    },
  ]

  return (
    <div className='rentalContainer'>
      <div className='rental-info'>
        <h2>{t('rental.title')}</h2>
        <h6>{t('rental.subtitle')}</h6>
        <p>{t('rental.description')}</p>
      </div>

      <div className='rental-auto'>
        <h2>{t('rental.carRental')}</h2>

        <h6>{t('rental.fleetInfo')}</h6>
        <p>{t('rental.carDetails1')}</p>
        <p>{t('rental.carDetails2')}</p>
        <p>{t('rental.carDetails3')}</p>
        <p>{t('rental.carDetails4')}</p>
      </div>

      <div className='rental-block-auto'>
        <div className="rental-block-auto-img">
          <div className='rental-block-auto-swipper'>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              modules={[Pagination, Navigation]}
            >
              {photo1.map((photo, index) => (
                <SwiperSlide key={index} className="photo-slide">
                  <div className="photo">
                    <img src={photo.photo} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="rental-block-auto-info">
          <div className='rental-table-block'>
            <table className="styled-table">
              <thead>
                <tr>
                  <th colSpan={2}>{t('rental.carType')}</th>
                  <th>{t('rental.rent1To7Days')}</th>
                  <th>{t('rental.rent8PlusDays')}</th>
                </tr>
              </thead>
              <tbody>
                {cars?.map((item: any, index: any) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.month}</td>
                    <td>{item.cost1}</td>
                    <td>{item.cost2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='spisok'>
            <ul>
              <li>{t('rental.deposit')}</li>
              <li>{t('rental.optionalInsurance')}</li>
              <li>{t('rental.techEquipment')}</li>
              <li>{t('rental.phoneAssistance')}</li>
              <li>{t('rental.driveableIn')}</li>
            </ul>
          </div>

          <div className='rental_btn'>
            <a href='https://wa.me/996551181888' target='_blank' rel='noopener noreferrer' className='tripsBtn'>
              <button className='rental-btn'>{t('rental.bookNow')}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rental;
