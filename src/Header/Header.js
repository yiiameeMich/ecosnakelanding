import React, {useState} from 'react';
import './Header.css'
import {Link} from "react-router-dom";

export default function Header() {

	const [burgActive, setBurgActive] = useState('hamburger')
	const [navActive, setNavActive] = useState('links-container')
	const [headerActive, setHeaderActive] = useState('header-container')

	const hamburger_overflow_changer = () => {
		if (burgActive !== 'hamburger') {
			document.body.style.overflow = ''
		} else {
			document.body.style.overflow = 'hidden'
		}
	}

	return (
		<div className='container'>
			<div className={headerActive}>
				<div className='logo-container'>
					<Link to='/' className='header-logo main-text'> EcoSnake </Link>
				</div>
				<div className={navActive}>
					<Link to='/products' className='header-link primary-text'> Shop All </Link>
					<Link to='/blog' className='header-link primary-text'> Our Story </Link>
					<Link to='/blog' className='header-link primary-text'> Blog </Link>
					<Link to='/products' className='header-link primary-text'> Catalog </Link>
				</div>

				<div className={burgActive} onClick={() => {
					hamburger_overflow_changer()
					setBurgActive((state) => state === 'hamburger' ? state += ' active' : state = 'hamburger')
					setNavActive((state) => state === 'links-container' ? state += ' active' : state = 'links-container')
					setHeaderActive((state) => state === 'header-container' ? state += ' active' : state = 'header-container')
				}}>
					<span className="bar">
					</span>
					<span className="bar">
					</span>
					<span className="bar">
					</span>
				</div>
			</div>
		</div>
	)

}