'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import './climatInfo.css';
import '../../app/i18n'
const photos = [
  { id: 1, photo: '/image/gallery1.jpg' },
  { id: 2, photo: '/image/two.jpg' },
  { id: 3, photo: '/image/gallery3.jpg' },
  { id: 4, photo: '/image/four.jpeg' },
  { id: 5, photo: '/image/tgmoto.jpg' },
  { id: 6, photo: '/image/gallery6.jpeg' },
  { id: 7, photo: '/image/gallery7.jpg' },
  { id: 8, photo: '/image/gallery4.jpg' }
];

function ClimatInfo() {
  const { t } = useTranslation();

  return (
    <div className='climat_container'>
      <h2 className='climatInfo_title'>{t('climatInfo.title')}</h2>
      <div className='climatInfo_block'>
        <div className='climatInfo_img'>
          <Image
            src="/image/XT600.jpeg"
            width={0}
            height={0}
            sizes={'100%'}
            className='climatInfoImg'
            alt={t('climatInfo.heading')}
          />
        </div>
        <div className='climatInfo_text'>
          <h4>{t('climatInfo.heading')}</h4>
          <p>{t('climatInfo.description')}</p>
        </div>
      </div>

      <div className='gallery'>
        {photos.map(item => (
          <div key={item.id} className="gallery-item">
            <Image
              src={item.photo}
              width={300}
              height={300}
              alt={`Gallery Image ${item.id}`}
              className="gallery-img"
              sizes='100%'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClimatInfo;
