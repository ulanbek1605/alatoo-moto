'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../../app/i18n';
import './serviceMain.css';

function ServiceMain() {
	const { t } = useTranslation();

	return (
		<div className='main_container'>
			{/* Темный оверлей */}
			<div className="overlay"></div>
			<div className='main'>
				<h3>
					<span>{t('serviceMain.discover')}</span> – {t('serviceMain.speak_russian')} – {t('serviceMain.speak_english')}
				</h3>
				<h1>{t('serviceMain.title')}</h1>
			</div>
			<div className='main_text'>
				{t('serviceMain.description')}
			</div>

			<div className='alatoo-moto-btn'>
				<a
					href='https://www.alatoo-moto.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='tripsBtn-main'
				>
					{t('serviceMain.press_here')}
				</a>
			</div>
		</div>
	);
}

export default ServiceMain;
