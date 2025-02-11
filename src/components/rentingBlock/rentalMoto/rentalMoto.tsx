'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from "react-i18next";
import './rentalMoto.css';

let photo1 = [
  { id: 1, photo: '/image/gallery1.jpg' },
  { id: 2, photo: '/image/2.jpg' },
  { id: 3, photo: '/image/5.jpg' },
  { id: 4, photo: '/image/7.jpg' },
];

function RentalMoto() {
  const { t } = useTranslation();

  // const moto = t('rentalMoto.moto', { returnObjects: true });

  const moto = [
    {
      id: 1,
      name: t('rentalMoto.moto1.name'),
      month: t('rentalMoto.moto1.month'),
      cost1: t('rentalMoto.moto1.cost1'),
      cost2: t('rentalMoto.moto1.cost2'),
      cost3: t('rentalMoto.moto1.cost3'),
    },
    {
      id: 2,
      name: t('rentalMoto.moto2.name'),
      month: t('rentalMoto.moto2.month'),
      cost1: t('rentalMoto.moto2.cost1'),
      cost2: t('rentalMoto.moto2.cost2'),
      cost3: t('rentalMoto.moto2.cost3'),
    },
  ]

  return (
    <div className='rentalMoto-container'>
      <div className='rentalMoto-title'>
        <h2>{t('rentalMoto.title')}</h2>
        <p>{t('rentalMoto.description1')}</p>
        <p>{t('rentalMoto.description2')}</p>
      </div>

      <div className='rentalMoto-block'>
        <div className="rentalMoto-block-img">
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

        <div className="rentalMoto-block-info">
          <div className='rental-table-block'>
            <table className="rate-table">
              <thead>
                <tr>
                  <th colSpan={2}>{t('rentalMoto.rateTable.ratePerDay')}</th>
                  <th>{t('rentalMoto.rateTable.1To7Days')}</th>
                  <th>{t('rentalMoto.rateTable.8To20Days')}</th>
                  <th>{t('rentalMoto.rateTable.21PlusDays')}</th>
                </tr>
              </thead>
              <tbody>
                {moto.map((item: any, index: any) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.month}</td>
                    <td>{item.cost1}</td>
                    <td>{item.cost2}</td>
                    <td>{item.cost3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='spisok1'>
            <ul>
              <li>{t('rentalMoto.deposit')}</li>
              <li>{t('rentalMoto.unlimitedKm')}</li>
              <li>{t('rentalMoto.insurance')}</li>
              <li>{t('rentalMoto.tpanniers')}</li>
              <li>{t('rentalMoto.crashBars')}</li>
              <li>{t('rentalMoto.bikeTanks')}</li>
              <li>{t('rentalMoto.seatHeight')}</li>
              <li>{t('rentalMoto.ramHolder')}</li>
              <li>{t('rentalMoto.rideableIn')}</li>
              <li>{t('rentalMoto.notRideableIn')}</li>
            </ul>
          </div>

          <div className='rental_btn'>
            <a href='https://wa.me/996998559855' target='_blank' rel='noopener noreferrer' className='tripsBtn'>
              <button className='rental-btn'>{t('rentalMoto.bookNow')}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentalMoto;
