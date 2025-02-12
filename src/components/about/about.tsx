'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../app/i18n';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1 className="title">{t('about.title')}</h1>
      <div className="content">
        <p>{t('about.paragraph1')}</p>
        <p>{t('about.paragraph2')}</p>
        <p>{t('about.paragraph3')}</p>
      </div>
      <style jsx>{`
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }
  
  .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .content {
    font-size: 18px;
    color: #333;
    margin-bottom: 20px;
  }

  /* 📏 Экраны до 650px */
  @media (max-width: 650px) {
    .content {
      font-size: 18px;
      text-align: center;
    }
  }

  /* 📏 Экраны до 450px */
  @media (max-width: 450px) {
    .container {
      padding: 10px;
    }

    .content {
      font-size: 14px;
    }

    .title {
      margin-bottom: 0px;
    }
  }
`}</style>

    </div>
  );
};

export default About;
