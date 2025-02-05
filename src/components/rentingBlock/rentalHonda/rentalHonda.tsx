'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import './rentalHonda.css'

let photo1 = [
	{
		id: 1,
		photo: '/image/gallery1.jpg'
	},
	{
		id: 2,
		photo: '/image/gallery1.jpg'
	},
	{
		id: 3,
		photo: '/image/gallery1.jpg'
	},
	{
		id: 4,
		photo: '/image/gallery1.jpg'
	},
]




const moto = [
	{
		id: 1,
		name: "Honda 125",
		month: "May - Oct.",
		cost1: "40 $",

	},

];

function rentalHonda() {
	return (
		<div className='rentalHonda-container'>
			<div className="rentalHonda-title">
				<h2>Honda CB 125F</h2>
				<p>Since 2023 we have a first small size motorbike at the start. Since we have increasing request mostly from our local customers we believe a good old reliable Honda is the answer.</p>
			</div>

			<div className="rentalHonda-block">
					<div className='rental-honda-img'>
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

				<div>
					<div className='rental-table-block'>
						<table className="rate-table">
							<thead>
								<tr>
									<th colSpan="2">rate per day</th>
									<th>rate per day</th>
								</tr>
							</thead>
							<tbody>
								{moto.map((item) => (
									<tr key={item.id}>
										<td>{item.name}</td>
										<td>{item.month}</td>
										<td>{item.cost1}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<div className='spisok1'>
						<ul>
							<li>deposit in cash: 100$</li>
							<li>unlimited km</li>
							<li>insurance (comprehensive coverage) optional: 10$/day</li>
							<li>Top Box</li>
							<li> <span> ride-able in: </span> Kyrgyzstan, Tadjikstan, Uzbekistan, Kazachstan</li>
							<li> <span>not ride-able in: </span> China, Afghanistan, Turkmenistan, Iran</li>
						</ul>

					</div>

					<div className='rental_btn'>
						<a 	href='https://wa.me/996551181888'
								target='_blank'
								rel='noopener noreferrer'
								className='tripsBtn'>
							<button className='rental-btn'>BOOK NOW</button>
						</a>
					</div>

				</div>
			</div>
		</div>
	)
}

export default rentalHonda