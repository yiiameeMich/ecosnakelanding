import React from 'react'
import './AboutProducts.css'

export default function AboutProducts () {

	return (
		<section className='about-products-container'>
			<div className="about-container">
				<div className="about-text-container">
					<h1 className="about-text about-text-1 primary-text">
						Here you will find products
						for all night and day steps
						and for all skin types.
					</h1>
				</div>
				<div className='about-image-container'>
					<img src={`${process.env.PUBLIC_URL}/assets/images/about-img-1.png`} alt="" className="about-img"/>
				</div>
			</div>
			<hr />
			<div className="about-container">
				<div className='about-image-container'>
					<img src={`${process.env.PUBLIC_URL}/assets/images/about-img-2.png`} alt="" className="about-img"/>
				</div>
				<div className="about-text-container">
					<h1 className="about-text about-text-2 primary-text">
						You can be sure that
						with us you will be able
						to find a product
						that is perfect for your skin.
					</h1>
				</div>
			</div>
		</section>
	)

}