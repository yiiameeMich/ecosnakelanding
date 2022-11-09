import React from 'react';
import './Header.css'

export default function Header() {

	return (
		<div className='container'>
			<div className='header-container'>
				<div className='logo-container'>
					<h1 className='header-logo main-text'> EcoSnake </h1>
				</div>
				<div className='links-container'>
					<a className='header-link primary-text' href='#'> Shop All </a>
					<a className='header-link primary-text' href='#'> Our Story </a>
					<a className='header-link primary-text' href='#'> Blog </a>
					<a className='header-link primary-text' href='#'> Catalog </a>
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