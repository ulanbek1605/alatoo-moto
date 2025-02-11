'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../../app/i18n';
import './partnerMain.css';

function partnerMain() {
	const { t } = useTranslation();

	return (
		<div className='main_container'>
			<div className="overlay"></div>
			<div className='main'>
				<h3>
					<span>{t('main.discover')}</span> – {t('main.speak_russian')} – {t('main.speak_english')}
				</h3>
				<h1>{t('main.title')}</h1>
			</div>
			<div className='main_text'>
				{t('main.description')}
			</div>

			<div className='alatoo-moto-btn'>
				<a
					href='https://www.alatoo-moto.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='tripsBtn-main'
				>
					{t('main.press_here')}
				</a>
			</div>
		</div>
	);
}

export default partnerMain;
