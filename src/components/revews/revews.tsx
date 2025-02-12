'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Подключаем стили пагинации

// Импортируем необходимые модули
import { Pagination, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next'; // Подключаем i18n

import './revews.css';

const MotoTourReviews = () => {
  const { t } = useTranslation();

  // const reviews: any = t('reviews.reviews', { returnObjects: true });
  const reviews = [
    {
      id: 1,
      name: t('reviews.reviews1.name'),
      date: t('reviews.reviews1.date'),
      text: t('reviews.reviews1.text')
    },
    {
      id: 2,
      name: t('reviews.reviews2.name'),
      date: t('reviews.reviews2.date'),
      text: t('reviews.reviews2.text')
    },
    {
      id: 3,
      name: t('reviews.reviews3.name'),
      date: t('reviews.reviews3.date'),
      text: t('reviews.reviews3.text')
    },
    {
      id: 4,
      name: t('reviews.reviews4.name'),
      date: t('reviews.reviews4.date'),
      text: t('reviews.reviews4.text')
    }
  ]
  return (
    <div className="moto-tour-reviews-container">
      <h2>{t('reviews.title')}</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // Включаем бесконечную прокрутку
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Автопрокрутка с задержкой 3 секунды
        pagination={{ clickable: true }} // Пагинация отключена
        modules={[Autoplay]} // Подключаем модули
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews?.map((review: any, index: number) => (
          <SwiperSlide key={index} className="review-slide">
            <div className="review">
              <h3>{review.name}</h3>
              <p className="review-date">{review.date}</p>
              <p className="review-text">{review.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MotoTourReviews;
