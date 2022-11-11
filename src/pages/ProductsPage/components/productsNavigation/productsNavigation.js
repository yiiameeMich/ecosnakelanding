import React from 'react'
import './productsnavigation.css'

export default function ProductsNavigation () {

	return (
		<div className="container">
			<div className="products-nav-content">
				<div className="products-nav-card" >
					<img src={`${process.env.PUBLIC_URL}/assets/images/nav-1.png`} alt="" className="bg-navigation-img"/>

					<div className="heading-product-navigation">
						<h1 className="prod-nav-heading main-text">Face Wash</h1>
					</div>
				</div>
				<div className="products-nav-card">
					<img src={`${process.env.PUBLIC_URL}/assets/images/nav-2.png`} alt="" className="bg-navigation-img"/>

					<div className="heading-product-navigation">
						<h1 className="prod-nav-heading main-text">Serum</h1>
					</div>
				</div>
				<div className="products-nav-card">
					<img src={`${process.env.PUBLIC_URL}/assets/images/nav-3.png`} alt="" className="bg-navigation-img"/>

					<div className="heading-product-navigation">
						<h1 className="prod-nav-heading main-text">Cream</h1>
					</div>
				</div>
			</div>
		</div>
	)

}