'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../app/i18n';

const Partners = () => {
  const { t } = useTranslation();

  const partners = [
    {
      name: t('partners.oil.name'),
      description: t('partners.oil.description'),
      image: '/image/Motul.jpg',
      sayt: 'https://mollubricants.com/en/',
    },
    {
      name: t('partners.alatoo.name'),
      description: t('partners.alatoo.description'),
      image: '/image/alatoo.jfif',
      sayt: 'https://www.alatoo-moto.com/',
    },
    {
      name: t('partners.osh.name'),
      description: t('partners.osh.description'),
      image: '/image/osh.jpg',
      sayt: 'https://destinationosh.com/en/',
    },
    {
      name: t('partners.hotel.name'),
      description: t('partners.hotel.description'),
      image: '/image/classic.jfif',
      sayt: 'https://classichotel.kg/',
    },
  ];

  return (
    <div className="container">
      <h1 className="title">{t('partners.title')}</h1>
      <div className="partners-list">
        {partners.map((partner, index) => (
          partner && (
            <a href={partner.sayt} key={index} className="card_partner">
              <div className="partner-card">
                <img src={partner.image} alt={partner.name} className="partner-image" />
                <h2 className="partner-name">{partner.name}</h2>
                <p className="partner-description">{partner.description}</p>
              </div>
            </a>
          )
        ))}
      </div>

      <style jsx>{`
      .container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}
.partners-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.partner-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.partner-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}
.partner-name {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
}
.partner-description {
  font-size: 16px;
  color: #555;
}
.card_partner {
  color: black;
}

@media (max-width: 480px) {
  .container {
    padding: 10px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .partner-name {
    font-size: 16px;
  }
  .partner-description {
    font-size: 14px;
  }
}
      `}</style>
    </div>
  );
};

export default Partners;
