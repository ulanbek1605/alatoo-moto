'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import './rental.css'


let photo1 = [
	{
		id: 1,
		photo: '/image/car1.jpg'
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


const cars = [
	{
		id: 1,
		name: 'Land Cruiser / 4.2L',
		month: 'May - Oct.',
		cost1: '150 $',
		cost2: '120 $'
	},
	{
		id: 2,
		name: 'Land Cruiser / 4.2L',
		month: 'May - Oct.',
		cost1: '150 $',
		cost2: '120 $'
	},
]
function rental() {
	return (
		<div className='rentalContainer'>
			<div className='rental-info'>
				<h2>Rental Motorbikes + Cars</h2>
				<h6>Our aim is high quality for rental vehicles. Reliability is what pays off in the unforgiving mountainous desert of Central Asia.</h6>
				<p>For the remote regions of Central Asia it is crucial to have some mechanical skills to help yourself in case of a flat tire or other damage. We expect you are able to change and fix a flat tire on the road. Tech equipment for usual emergency procedure is provided. Pick-up / drop-off is in Osh only. There is a direct flight from Istanbul to Osh with Pegasus Airlines <a href="https://www.flypgs.com/">FLY</a>. Alatoo Moto is looking forward to welcome you in Kyrgyzstan. </p>
			</div>


			<div className='rental-auto'>
				<h2>
					CAR rental
				</h2>

				<h6> In our fleet we have 16 Yamaha XT 600 and 3 Yamaha Tenere</h6>
				<p> 2002 Land cruiser 100 series 4.2 liter diesel, mechanik transmission</p>
				<p> 2000 Land cruiser 78 series 4.2 liter diesel, mechanik transmission</p>
				<p> 2002 Land cruiser 76 series 4.2 liter diesel, mechanik transmission</p>
				<p>2001 RAV4 2 liter gasoline automatic transmission</p>



			</div>
			<div className='rental-block-auto'>
				<div className="rental-block-auto-img">
					<div className='rental-block-auto-swipper'>
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
					<div className='rental-block-auto-swipper'>

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
				</div>
				<div className="rental-block-auto-info">
					<div className='rental-table-block'>
						<table className="styled-table">
							<thead>
								<tr>
									<th colSpan="2">Type of Car</th>
									<th>1-7 days</th>
									<th>8+ days</th>
								</tr>
							</thead>
							<tbody>
								{cars.map((item) => (
									<tr key={item.id}>
										<td>{item.name}</td>
										<td>{item.month}</td>
										<td>{item.cost1}</td>
										<td>{item.cost2}</td>
									</tr>
								))}
							</tbody>
						</table>


					</div>

					<div className='spisok'>
						<ul>
							<li>deposit in cash: 1500$</li>
							<li>optional insurance (comprehensive coverage): 17$/day</li>
							<li>tech equipment included for tire fix & pump overland</li>
							<li>phone assistance on the road provided and included</li>
							<li> <span> drive-able in: </span> Kyrgyzstan, Tadjikstan, Uzbekistan, Kazachstan</li>
							{/* <li> <span>not drive-able in: </span> China, Afghanistan, Turkmenistan, Iran</li> */}
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

export default rental