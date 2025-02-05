'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './rentalMoto.css'


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
		name: "YAMAHA XT 600",
		month: "May - Sept",
		cost1: "100 $",
		cost2: "95 $",
		cost3: "upon request",
	},
	{
		id: 2,
		name: "YAMAHA TENERE 660",
		month: "May - Sept",
		cost1: "180 $",
		cost2: "150 $",
		cost3: "upon request",
	},
];


function rentalMoto() {


	return (
		<div className='rentalMoto-container'>
			<div className='rentalMoto-title'>
				<h2>Yamaha XT 600 E</h2>
				<p>The XT is the world famous single cylinder indestructible mate! It boasts 40 years of development history and is therefore a very well proven, reliable and robust Enduro. The engine still works with a carburetor, but no matter the elevation, the XT doesn't bother. With its 178kg / 39PS / air cooled, it is still a record holder among its competitors. </p>
				<p>Since 2019 we have 3 XT's available, one with an extended 23L-Tank.

					All of our vehicles are freshly imported from Switzerland.

					We value having high quality vehicles with low mileage. </p>
			</div>

			<div className='rentalMoto-block'>
				<div className="rentalMoto-block-img">
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
				<div className="rentalMoto-block-info">
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
							<li>deposit in cash: 600$</li>
							<li>unlimited km</li>
							<li>insurance (comprehensive coverage) optional: 15$/day</li>
							<li>tpanniers 30L each side (Enduristan Monsun3) / top case not provided</li>
							<li>crash bars, 12V-Socket</li>
							<li>All bikes with 17L-tanks / 3 bike with 23L-tank</li>
							<li>seat height: 840mm</li>
							<li>Extra RAM Holder for the handle bar 1$/day,
								12V socket is installed at the bike.
							</li>
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

export default rentalMoto