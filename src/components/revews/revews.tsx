// components/MotoTourReviews.tsx
'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Подключаем стили пагинации

// Импортируем необходимые модули
import { Pagination, Autoplay } from 'swiper/modules';

import './revews.css';

const reviews = [
  {
    id: 1,
    name: "John Doe",
    date: "January 20, 2025",
    text: "Unforgettable motorcycle tour through Kyrgyzstan! The mountain roads and lakes are simply breathtaking.",
  },
  {
    id: 2,
    name: "Emma Williams",
    date: "January 18, 2025",
    text: "Riding through Kyrgyzstan’s valleys and mountains was the experience of a lifetime. Well-organized and thrilling!",
  },
  {
    id: 3,
    name: "James Smith",
    date: "January 15, 2025",
    text: "Amazing tour across Kyrgyzstan. The landscapes were stunning, and the support team was incredibly helpful.",
  },
  {
    id: 4,
    name: "Sophia Brown",
    date: "January 10, 2025",
    text: "Kyrgyzstan's roads are a motorcyclist’s dream! Great adventure and beautiful places to explore.",
  },
];

const MotoTourReviews = () => {
  return (
    <div className="moto-tour-reviews-container">
      <h2>Reviews of Our Kyrgyzstan Motorcycle Tours</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // Включаем бесконечную прокрутку
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Автопрокрутка с задержкой 3 секунды
        pagination={{ clickable: true }} // Пагинация отключена
        modules={[ Autoplay]} // Подключаем модули
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review, index) => (
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
