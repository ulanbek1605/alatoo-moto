'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import './rentalSuperdual.css'

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
		name: "Land Cruiser / 4.2L",
		month: "March - 15. May",
		cost1: "70 $",
		cost2: "65 $",
		cost3: "upon request",
	},
	{
		id: 2,
		name: "Land Cruiser / 4.2L",
		month: "16. - 31. May, Oct.",
		cost1: "95 $",
		cost2: "90 $",
		cost3: "upon request",
	},
	{
		id: 3,
		name: "Land Cruiser / 4.2L",
		month: "June - Sept.",
		cost1: "100 $",
		cost2: "95 $",
		cost3: "upon request",
	},
];



function rentalSuperdual() {
	return (
		<div className='rentalSuperdual-container'>
			<div className='rental-superdual-title'>
				<h2>SWM Superdual X 600</h2>
				<h6>The SWM Superdual X is the new flagship of Zorro Moto!</h6>
				<p>It is new, reliable and made for gravel! An original Husqvarna invention manufactured into a solid and flexible bike for the back country. With its 169kg, single cylinder injection and 18L fuel tank, it fulfills every expectation of adventurous riders. The model X with its front 21' /rear 18' provides a balanced performance on tarmac, gravel and off road. The mileage range is around 400 km.
					We have 3 bikes in our fleet.</p>
			</div>

			<div className='rental-superdual-block'>
				<div className='rental-superdual-img'>
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
				<div className='rental-superdual-info'>
					<div className='rental-table-block'>
						<table className="rate-table">
							<thead>
								<tr>
									<th colSpan="2">rate per day</th>
									<th>1-7 days</th>
									<th>8-20 days</th>
									<th>21 days plus</th>
								</tr>
							</thead>
							<tbody>
								{moto.map((item) => (
									<tr key={item.id}>
										<td>{item.name}</td>
										<td>{item.month}</td>
										<td>{item.cost1}</td>
										<td>{item.cost2}</td>
										<td>{item.cost3}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<div className='spisok1'>
						<ul>
							<li>deposit in cash: 500$</li>
							<li>optional insurance (comprehensive coverage): 15$/day</li>
							<li>panniers 35L each side / top case not provided</li>
							<li>18L-tank, wind shield, fog lights, crash bars</li>
							<li>crash bars, 12V-Socket</li>
							<li>seat height: 898mm</li>
							<li>tech equipment included</li>
							<li>phone assistance on the road provided and included</li>
							<li>Extra RAM Holder for the handle bar 1$/day,
								12V socket is installed at the bike.</li>
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

export default rentalSuperdual