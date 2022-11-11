import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

export default function Header() {

	return (
		<div className='container'>
			<div className='header-container'>
				<div className='logo-container'>
					<Link to='/main' className='header-logo main-text'> EcoSnake </Link>
				</div>
				<div className='links-container'>
					<Link to='/products' className='header-link primary-text'> Shop All </Link>
					<a className='header-link primary-text' href=''> Our Story </a>
					<Link className='header-link primary-text' to='/blog'> Blog </Link>
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