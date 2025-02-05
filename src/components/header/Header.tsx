'use client'
import React, { useState } from 'react'
import './header.css'
import { usePathname } from 'next/navigation';
function Header() {
	let pathName = usePathname()
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen((prev) => !prev);
	};


	return (
		<div className='header'>
			<div className='header_container'>
				<div className='header-elem'>
					<div className='header_logo'>
						ALATOO-MOTO
					</div>
					<div className='header_nav'>
						<a href="/" className={pathName === '/' ? 'active' : ""}>Home</a>
						<a href="/renting/" className={pathName === '/renting' ? 'active' : ""}>Rentals</a>
						<a href="/services/" className={pathName === '/services' ? 'active' : ""}>Repair/Service</a>
						<a href="/partners/" className={pathName === '/partners' ? 'active' : ""}>Partners</a>
						<a href="/about/" className={pathName === '/about' ? 'active' : ""}>About us</a>
						<a href="/faq/" className={pathName === '/faq' ? 'active' : ""}>FAQ</a>
						<a href="/contacts/" className={pathName === '/contacts' ? 'active' : ""}>Contacts</a>
					</div>

					<div className="menu-img" onClick={handleClick}>
						<img src="/svg/menu.svg" alt="" />
					</div>
					<div className={`burger-menu ${open ? 'active' : ''}`} >
						<div className="menu-nav">
							<a href="/" className={pathName === '/' ? 'active' : ""}>Home</a>
							<a href="/renting/" className={pathName === '/renting' ? 'active' : ""}>Ranting</a>
							<a href="/servises/" className={pathName === '/services' ? 'active' : ""}>Repair/Service</a>
							<a href="/partners/" className={pathName === '/partners' ? 'active' : ""}>Partners</a>
							<a href="/about/" className={pathName === '/about' ? 'active' : ""}>About us</a>
							<a href="/contacts/" className={pathName === '/contacts' ? 'active' : ""}>Contacts</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header