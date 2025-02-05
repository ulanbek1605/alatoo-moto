'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './rentalScooters.css'

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
		name: 'Honda Dio 50 ',
		cost1: '480 Som',
		cost2: '2580 Som',
		cost3: '8800 Som'
	},
	{
		id: 2,
		name: 'Honda Super Cub',
		cost1: '480 Som',
		cost2: '2580 Som',
		cost3: '8800 Som'
	},
	{
		id: 3,
		name: 'Honda Lead110 (two seats)',
		cost1: '880 Som',
		cost2: '9580 Som',
		cost3: '16800 Som'
	},
]
function rentalScooters() {
	return (
		<div className='rentalScooters-container'>
			<div className='rentalScootrs-title'>
				<h2>Scooters</h2>
				<p>Beginning in March scooters are available for rental. Nothing is easier than parking your motorcycle, picking a scooter and going out around the corner to find a nice and cozy restaurant.</p>
			</div>

			<div className='rentalScooters-block'>
				<div className='rentalScooters-img'>
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
				<div className='rentalScooters-info'>
					<div className='rentalScooters-table'>
						<table className="rate-table">
							<thead>
								<tr>
									<th>Vehicle Type</th>
									<th>1 Day</th>
									<th>1 Week</th>
									<th>1 Month</th>
								</tr>
							</thead>
							<tbody>
								{moto.map((item) => (
									<tr key={item.id}>
										<td>{item.name}</td>
										<td>{item.cost1}</td>
										<td>{item.cost2}</td>
										<td>{item.cost3}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<div className="spisok1">
						<ul>
							<li>deposit: 2000 som and Passport per scooter</li>
							<li>unlimited km</li>
							<li> <span> ride-able in: </span>Osh and surrounding</li>
							<li>no booking required</li>
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

export default rentalScooters