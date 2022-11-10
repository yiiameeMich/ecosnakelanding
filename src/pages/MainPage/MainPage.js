import React from 'react';
import './mainpage.css'
import {Link} from "react-router-dom";


export default function MainPage () {

	return (

		<div className='container'>
			<div className="main-page-content">
				<div className="mp-text-content">
					<h1 className="mp-heading main-text">Effective and ecological skincare</h1>
					<h1 className="mp-description primary-text">
						We create unique products that will
						keep your skin in tone and that you will
						fall in love with after just a few uses.
						By the way, we do not test it on animals.
					</h1>
					<div className="btn-container">
						<Link to='/products'>
							<button className="mp-btn">View catalog</button>
						</Link>
						<button className="mp-btn">Make an order</button>

					</div>
				</div>
				<div className="mp-img-content">
					<img src={`${process.env.PUBLIC_URL}/assets/images/mp-photo.png`} alt=""/>
				</div>
			</div>
		</div>

	)

}