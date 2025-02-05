import React from 'react';
import Image from 'next/image';
import './trips.css';

const addres = [
	{
		id: 1,
		title: 'Customized motorcycle guyded tour with support cars 4x4 for your own group.',
		addres: 'Motorradreisen Swiss, Kyrgyzstan | Round trip.',
		photo: '/image/gallery2.jpeg',
		data: null
	},
	{
		id: 2,
		title: 'Rent a motorcycle – ride by yourself / Rent a Yamaha XT600E and travel alone or with friends.',
		addres: 'Osh, Kyrgyzstan',
		photo: '/image/trips11.jpg',
		data: null
	},
	{
		id: 3,
		title: 'Motorcycle servise and self repaire we provide  to you tools and space  ',
		addres: 'Osh, Kyrgyzstan | Round trip.',
		photo: '/image/gallery41.jpeg',
		data: null,
	},
	{
		id: 4,
		title: 'Customized motorcycle tour for your own group.',
		addres: 'Osh, Kyrgyzstan | Round trip.',
		photo: '/image/trips1.jpeg',
		data: null,
	},
	{
		id: 5,
		title: 'Oil and Tires chinge, you can found good tires,inner tubes for CFR 250 XT, MITAS,SHINKO,HEIDENAU  ',
		addres: 'Osh, Kyrgyzstan | Round trip.',
		photo: '/image/shiny.jpg',
		data: null,
	},
	{
		id: 6,
		title: 'We can support you with arrange rental cars 4x4 ',
		addres: 'Osh, Kyrgyzstan | Round trip.',
		photo: '/image/2222.jpg',
		data: null,
	},
]


function Trips() {
	return (
		<div className='tripsContainer'>
			<h2>Available trips</h2>
			<div className='tripsBlock'>
				{addres.map((item, index) => (
					<div key={index} className='tripsCard'>
						<div className='tripsImage'>
							<Image
								src={item.photo}
								width={300}
								height={200}
								alt={item.title}
								className='tripsImg'
							/>
						</div>
						<div className='tripsContent'>
							<h3 className='tripsTitle'>{item.title}</h3>
							<p className='tripsAddress'>{item.addres}</p>
							{item.data && <p className='tripsDate'>{item.data}</p>}
							{item.id === 1 ? (<a
								href='https://www.alatoo-moto.com/'
								target='_blank'
								rel='noopener noreferrer'
								className='tripsBtn'
							>
								LEARN MORE
							</a>) : (<a
								href="mailto:shahruh@alatoo-moto.com"
								target="_blank"
								rel="noopener noreferrer"
								className="tripsBtn"
							>
								LEARN MORE
							</a>)}

						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Trips;
