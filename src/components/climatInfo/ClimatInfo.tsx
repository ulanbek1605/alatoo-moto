'use client'
import React from 'react'
import Image from 'next/image'
import './climatInfo.css'

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
	return (
		<div className='climat_container'>
			<h2 className='climatInfo_title'>BREATHTAKING LANDSCAPES. REMOTE NATURE ROADS. RIDING WITHOUT BOUNDARIES.</h2>
			<div className='climatInfo_block'>
				<div className='climatInfo_img'>
					<Image
						src="/image/XT600.jpeg"
						width={400}
						height={400}
						className='climatInfoImg'
						alt="Scenic view of Kyrgyzstan"
					/>

				</div>
				<div className='climatInfo_text'>
					<h4>Climate, Weather, Valleys, and High Mountains <br />
						(in Kyrgyz: AlaToo)</h4>
					<p>Kyrgyzstan is very mountainous, and the landscape is breathtakingly beautiful. Fertile lowlands, lakes, and mountains up to 7000 m high define the country. On our tours, it can be 40°C warm in the lowlands, and at night at high altitudes, temperatures can often drop below 0°C. The roads are often dusty and very dry. Rain occurs occasionally. We also cross streams from time to time. For this reason, sturdy motorcycle boots and protective gear are essential. On sections with rough gravel, you might even ride standing.</p>
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
	)
}

export default ClimatInfo