import React from 'react'
import './aboutMain.css'

function aboutMain() {
	return (
		<div className='main_container'>
			{/* Добавлен темный оверлей через отдельный div */}
			<div className="overlay"></div>
			<div className='main'>
				<h3> <span>DISCOVER NOW</span> – WE ALSO SPEAK RUSSIAN – WE ALSO SPEAK ENGLISH</h3>
				<h1>MOTORCYCLE REPAIR,SERVICE AND GUYDED TOURS SUPPORT </h1>
			</div>
			<div className='main_text'>
				It’s a great feeling to ride through the magnificent mountain landscapes of Kyrgyzstan or the Pamir Mountains. Children and adults wave at us or honk – we are welcome everywhere. Europeans do not need a visa. We have very direct and affordable flight connections via Istanbul with Pegasus (flypgs.com) directly to Osh, Kyrgyzstan, our base in Central Asia.

				Are you in the mood for breathtaking landscapes, empty roads, and endless gravel tracks? Would you like to discover a new country safely and in an organized way while gaining cultural insights with expert guidance? Then you are in the right place.

				For more information, please check the individual tours. If you have any questions or concerns, feel free to send an email or call us – we will get back to you immediately.

				Our Swiss Mine Partnes is organize custom group tours – Nous organisons aussi des Tours en Groupe en Français – We also organize group tours in English.
			</div>

			<div className='alatoo-moto-btn'>
				<a
					href='https://www.alatoo-moto.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='tripsBtn-main'
				>
					PRESS HERE
				</a>
			</div>
		</div>
	)
}

export default aboutMain
