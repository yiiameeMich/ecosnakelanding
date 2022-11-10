import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

export default function Header() {

	return (
		<div className='container'>
			<div className='header-container'>
				<div className='logo-container'>
					<Link to='/' className='header-logo main-text'> EcoSnake </Link>
				</div>
				<div className='links-container'>
					<Link to='/products' className='header-link primary-text' href='#'> Shop All </Link>
					<a className='header-link primary-text' href=''> Our Story </a>
					<a className='header-link primary-text' href=''> Blog </a>
					<a className='header-link primary-text' href=''> Catalog </a>
				</div>

				<div className='hamburger'>
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